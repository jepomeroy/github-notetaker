const STORAGE_KEY = "github-notetaker:users";
export const USERS_CHANGED_EVENT = "github-notetaker:users-changed";

export function getUsers(): string[] {
    if (typeof localStorage === "undefined") return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export function addUser(username: string): void {
    if (typeof localStorage === "undefined") return;
    const users = getUsers();
    if (!users.includes(username)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...users, username]));
        window.dispatchEvent(new Event(USERS_CHANGED_EVENT));
    }
}

export function removeUser(username: string): void {
    if (typeof localStorage === "undefined") return;
    const users = getUsers().filter((existing) => existing !== username);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    window.dispatchEvent(new Event(USERS_CHANGED_EVENT));
}
