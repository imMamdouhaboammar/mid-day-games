export interface Suspect {
  name: string;
  role: string;
  statement: string;
}

export interface Clue {
  id: string;
  title: string;
  detail: string;
  significance: string;
  unlocked?: boolean;
}

export interface Hypothesis {
  id: string;
  text: string;
  isCorrect: boolean;
  shortExplanation: string;
}

export interface StoryCase {
  id: string;
  title: string;
  chapterTitle: string;
  genre: string;
  difficulty: "مبتدئ" | "متوسط" | "متقدم" | "محقق عبقري";
  estimatedMinutes: number;
  synopsis: string;
  storyContent: string;
  location: string;
  suspectsOrEntities: Suspect[];
  clues: Clue[];
  puzzleQuestion: string;
  puzzleType: string;
  cognitiveSkillTrained: string;
  hypotheses: Hypothesis[];
  subtleHint: string;
  isCustomAi?: boolean;
}

export interface SolvedRecord {
  caseId: string;
  caseTitle: string;
  solvedAt: string;
  score: number;
  timeSpentSeconds: number;
  verdict: string;
  userTheory?: string;
}

export interface PlayerStats {
  sharpnessScore: number;
  streakDays: number;
  casesSolvedCount: number;
  quickGamesPlayed: number;
  totalBreakMinutes: number;
  lastPlayedDate: string;
  solvedCases: SolvedRecord[];
  favoriteGenre: string;
}

export type ActiveTab = "cases" | "reader" | "quick-gym" | "stats" | "custom-case";

export const INITIAL_PLAYER_STATS: PlayerStats = {
  sharpnessScore: 0,
  streakDays: 0,
  casesSolvedCount: 0,
  quickGamesPlayed: 0,
  totalBreakMinutes: 0,
  lastPlayedDate: "",
  favoriteGenre: "",
  solvedCases: [],
};
