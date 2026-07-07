const STORAGE_PREFIX = "github-notetaker:notes:";

export function getNotes(username: string): string[] {
    if (typeof localStorage === "undefined") return [];
    const raw = localStorage.getItem(STORAGE_PREFIX + username);
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export function saveNotes(username: string, notes: string[]): void {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(STORAGE_PREFIX + username, JSON.stringify(notes));
}

export function deleteNotes(username: string): void {
    if (typeof localStorage === "undefined") return;
    localStorage.removeItem(STORAGE_PREFIX + username);
}
