import test from "node:test";
import assert from "node:assert/strict";
import { INITIAL_PLAYER_STATS } from "../types";
import {
  getLocalDateKey,
  isActiveToday,
  markDailyActivity,
} from "./playerProgress";

test("getLocalDateKey uses a stable YYYY-MM-DD key", () => {
  assert.equal(getLocalDateKey(new Date(2026, 8, 21, 12, 0, 0)), "2026-09-21");
});

test("first activity starts a one-day streak", () => {
  const next = markDailyActivity(INITIAL_PLAYER_STATS, new Date(2026, 8, 21, 12));
  assert.equal(next.streakDays, 1);
  assert.equal(next.lastPlayedDate, "2026-09-21");
});

test("multiple activities on the same day do not inflate the streak", () => {
  const stats = {
    ...INITIAL_PLAYER_STATS,
    streakDays: 4,
    lastPlayedDate: "2026-09-21",
  };
  const next = markDailyActivity(stats, new Date(2026, 8, 21, 20));
  assert.equal(next.streakDays, 4);
});

test("activity on the following day extends the streak", () => {
  const stats = {
    ...INITIAL_PLAYER_STATS,
    streakDays: 4,
    lastPlayedDate: "2026-09-20",
  };
  const next = markDailyActivity(stats, new Date(2026, 8, 21, 12));
  assert.equal(next.streakDays, 5);
});

test("a gap resets the streak to one", () => {
  const stats = {
    ...INITIAL_PLAYER_STATS,
    streakDays: 12,
    lastPlayedDate: "2026-09-18",
  };
  const next = markDailyActivity(stats, new Date(2026, 8, 21, 12));
  assert.equal(next.streakDays, 1);
});

test("isActiveToday reflects the persisted activity date", () => {
  const stats = {
    ...INITIAL_PLAYER_STATS,
    lastPlayedDate: "2026-09-21",
  };
  assert.equal(isActiveToday(stats, new Date(2026, 8, 21, 9)), true);
  assert.equal(isActiveToday(stats, new Date(2026, 8, 22, 9)), false);
});
