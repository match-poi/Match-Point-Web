export const QUIZ_LEVEL_SESSION_KEY = "matchpoint-quiz-level";

export const QUIZ_LEVEL_UPDATED_EVENT = "matchpoint-quiz-level-updated";

export function readQuizLevelFromSession(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(QUIZ_LEVEL_SESSION_KEY);
  } catch {
    return null;
  }
}

export function saveQuizLevelToSession(level: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(QUIZ_LEVEL_SESSION_KEY, level);
    window.dispatchEvent(new Event(QUIZ_LEVEL_UPDATED_EVENT));
  } catch {
    /* ignore */
  }
}

export function clearQuizLevelFromSession(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(QUIZ_LEVEL_SESSION_KEY);
    window.dispatchEvent(new Event(QUIZ_LEVEL_UPDATED_EVENT));
  } catch {
    /* ignore */
  }
}
