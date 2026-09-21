// Game Constants following game-architecture & game-designer skills
export const GAME_CONSTANTS = {
  POINTS: {
    STROOP_CORRECT: 10,
    PARADOX_CORRECT: 15,
    MEMORY_CORRECT: 25,
    MEMORY_PARTIAL: 5,
    CASE_SOLVED_NEW: 35,
    CASE_SOLVED_REPEAT: 10,
  },
  STREAK_MILESTONES: [
    { count: 3, label: "تركيز متقد!", title: "3 إجابات متتالية" },
    { count: 5, label: "انتباه استثنائي!", title: "5 إجابات متتالية" },
    { count: 8, label: "عقل عبقري!", title: "علامة كاملة بلا خطأ" },
  ],
  SPECTACLE: {
    SHAKE_DURATION_MS: 400,
    SCORE_POPUP_DURATION_MS: 700,
    PARTICLE_COUNT: 18,
    FEEDBACK_DELAY_MS: 450,
  },
  TOUCH: {
    MIN_TARGET_HEIGHT: "min-h-[44px]",
    MIN_TARGET_WIDTH: "min-w-[44px]",
  },
  AUDIO: {
    STORAGE_KEY: "yaqadha_sound_muted",
    MASTER_GAIN: 0.25,
    AMBIENT_GAIN: 0.2,
  },
};
