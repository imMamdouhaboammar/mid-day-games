// Web Audio API sound generator & SFX engine following game-audio skill guidelines
import { GAME_CONSTANTS } from "../config/gameConstants";

class SoundController {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private ambientSource: AudioNode | null = null;
  private ambientGain: GainNode | null = null;
  private isMuted: boolean = false;
  private currentMode: "off" | "rain" | "library" | "binaural" = "off";
  private listenersAttached: boolean = false;

  constructor() {
    try {
      const savedMute = localStorage.getItem(GAME_CONSTANTS.AUDIO.STORAGE_KEY);
      if (savedMute !== null) {
        this.isMuted = savedMute === "true";
      }
    } catch {
      // ignore localStorage issues
    }
    this.setupGlobalListeners();
  }

  private setupGlobalListeners() {
    if (typeof window === "undefined" || this.listenersAttached) return;
    this.listenersAttached = true;

    // Autoplay unlock on first user interaction
    const unlockAudio = () => {
      this.initCtx();
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });

    // Keyboard shortcut 'M' for mute toggle
    window.addEventListener("keydown", (e) => {
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (activeTag === "input" || activeTag === "textarea" || (document.activeElement as HTMLElement)?.isContentEditable) {
        return;
      }
      if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        this.toggleMute();
      }
    });
  }

  public initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public getMaster(): GainNode | null {
    this.initCtx();
    return this.masterGain;
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    try {
      localStorage.setItem(GAME_CONSTANTS.AUDIO.STORAGE_KEY, String(muted));
    } catch {
      // ignore
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 1, this.ctx.currentTime);
    }
  }

  public toggleMute(): boolean {
    const next = !this.isMuted;
    this.setMute(next);
    return next;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public getCurrentAmbient() {
    return this.currentMode;
  }

  public stopAmbient() {
    if (this.ambientSource) {
      try {
        (this.ambientSource as any).stop?.();
        this.ambientSource.disconnect();
      } catch {
        // ignore
      }
      this.ambientSource = null;
    }
    this.currentMode = "off";
  }

  public playAmbient(mode: "rain" | "library" | "binaural") {
    this.initCtx();
    if (!this.ctx || !this.masterGain) return;
    this.stopAmbient();
    this.currentMode = mode;

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(GAME_CONSTANTS.AUDIO.AMBIENT_GAIN, this.ctx.currentTime);
    this.ambientGain.connect(this.masterGain);

    if (mode === "rain") {
      // Pink/Brownish noise for rain with lowpass filter
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);

      noise.connect(filter);
      filter.connect(this.ambientGain);
      noise.start();
      this.ambientSource = noise;
    } else if (mode === "binaural") {
      // 10Hz Alpha frequency entrainment for alert calm (left 216Hz, right 226Hz)
      const oscLeft = this.ctx.createOscillator();
      const oscRight = this.ctx.createOscillator();
      oscLeft.type = "sine";
      oscRight.type = "sine";
      oscLeft.frequency.setValueAtTime(216, this.ctx.currentTime);
      oscRight.frequency.setValueAtTime(226, this.ctx.currentTime);

      const merger = this.ctx.createChannelMerger(2);
      oscLeft.connect(merger, 0, 0);
      oscRight.connect(merger, 0, 1);

      merger.connect(this.ambientGain);
      oscLeft.start();
      oscRight.start();

      this.ambientSource = {
        disconnect: () => {
          try {
            oscLeft.stop();
            oscRight.stop();
            oscLeft.disconnect();
            oscRight.disconnect();
            merger.disconnect();
          } catch {
            // ignore
          }
        },
      } as any;
    } else if (mode === "library") {
      // Warm fireplace / subtle library low resonance
      const osc = this.ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(110, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(220, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(this.ambientGain);
      osc.start();

      this.ambientSource = osc;
    }
  }

  // --- Granular SFX Presets (game-audio engine pattern) ---

  public playTone(freq: number, type: OscillatorType, duration: number, gain = 0.2, filterFreq = 4000) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(gain, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(filterFreq, now);

    osc.connect(filter).connect(gainNode).connect(this.masterGain);
    osc.start(now);
    osc.stop(now + duration);
  }

  public playNotes(notes: number[], type: OscillatorType, noteDuration: number, gap: number, gain = 0.25, filterFreq = 4000) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    notes.forEach((freq, i) => {
      const start = now + i * gap;
      const osc = this.ctx!.createOscillator();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, start);

      const gainNode = this.ctx!.createGain();
      gainNode.gain.setValueAtTime(gain, start);
      gainNode.gain.exponentialRampToValueAtTime(0.001, start + noteDuration);

      const filter = this.ctx!.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(filterFreq, start);

      osc.connect(filter).connect(gainNode).connect(this.masterGain!);
      osc.start(start);
      osc.stop(start + noteDuration);
    });
  }

  // Specific procedural audio presets
  public scoreSfx() {
    this.playNotes([659.25, 987.77], "square", 0.12, 0.08, 0.22, 4500);
  }

  public streakSfx() {
    // 4-note celebration arpeggio: C5, E5, G5, C6
    this.playNotes([523.25, 659.25, 783.99, 1046.5], "sine", 0.16, 0.08, 0.25, 5000);
  }

  public timerChimeSfx() {
    // Resonant singing bowl / bell harmonic
    this.playNotes([440, 659.25, 880], "sine", 0.8, 0.15, 0.2, 3000);
  }

  public whooshSfx() {
    this.playTone(300, "triangle", 0.15, 0.12, 1200);
  }

  public clueSfx() {
    this.playNotes([440, 660], "triangle", 0.25, 0.08, 0.15, 4000);
  }

  public wrongSfx() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.linearRampToValueAtTime(130, now + 0.25);

    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(0.15, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gainNode).connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  public clickSfx() {
    this.playTone(550, "sine", 0.04, 0.08, 2500);
  }

  // Backward-compatible wrapper
  public playSfx(type: "clue" | "success" | "wrong" | "click" | "streak") {
    switch (type) {
      case "click":
        this.clickSfx();
        break;
      case "clue":
        this.clueSfx();
        break;
      case "success":
        this.scoreSfx();
        break;
      case "streak":
        this.streakSfx();
        break;
      case "wrong":
        this.wrongSfx();
        break;
    }
  }
}

export const soundController = new SoundController();

