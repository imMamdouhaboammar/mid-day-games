import { PlayerStats } from "../types";

const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export const PLAYER_STATS_STORAGE_KEY = "yaqadha_player_stats_v2";
export const LAST_CASE_STORAGE_KEY = "yaqadha_last_case_id";

export function getLocalDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dayNumberFromKey(key: string): number | null {
  if (!DATE_KEY_PATTERN.test(key)) return null;
  const [year, month, day] = key.split("-").map(Number);
  return Math.floor(Date.UTC(year, month - 1, day) / 86_400_000);
}

export function isActiveToday(stats: PlayerStats, now = new Date()): boolean {
  return stats.lastPlayedDate === getLocalDateKey(now);
}

export function markDailyActivity(stats: PlayerStats, now = new Date()): PlayerStats {
  const today = getLocalDateKey(now);

  if (stats.lastPlayedDate === today) {
    return stats;
  }

  const previousDay = dayNumberFromKey(stats.lastPlayedDate);
  const currentDay = dayNumberFromKey(today);
  const continuedStreak =
    previousDay !== null &&
    currentDay !== null &&
    currentDay - previousDay === 1;

  return {
    ...stats,
    lastPlayedDate: today,
    streakDays: continuedStreak ? Math.max(1, stats.streakDays + 1) : 1,
  };
}

export function formatLastPlayedDate(stats: PlayerStats, now = new Date()): string {
  if (!stats.lastPlayedDate) return "لا يوجد نشاط بعد";

  const today = dayNumberFromKey(getLocalDateKey(now));
  const last = dayNumberFromKey(stats.lastPlayedDate);

  if (today !== null && last !== null) {
    const difference = today - last;
    if (difference === 0) return "اليوم";
    if (difference === 1) return "أمس";
  }

  const [year, month, day] = stats.lastPlayedDate.split("-").map(Number);
  if (!year || !month || !day) return stats.lastPlayedDate;

  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export function getAverageCaseScore(stats: PlayerStats): number | null {
  if (stats.solvedCases.length === 0) return null;
  const total = stats.solvedCases.reduce((sum, record) => sum + record.score, 0);
  return Math.round(total / stats.solvedCases.length);
}

export function getBestCaseScore(stats: PlayerStats): number | null {
  if (stats.solvedCases.length === 0) return null;
  return Math.max(...stats.solvedCases.map((record) => record.score));
}
