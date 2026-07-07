import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import DeleteButton from "~/components/DeleteButton";
import { deleteNotes } from "~/utils/notesStorage";
import { getUsers, removeUser, USERS_CHANGED_EVENT } from "~/utils/usersStorage";

export default function UserDropdown() {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setUsers(getUsers());
    }, [location.pathname]);

    useEffect(() => {
        function handleUsersChanged() {
            setUsers(getUsers());
        }
        window.addEventListener(USERS_CHANGED_EVENT, handleUsersChanged);
        return () => window.removeEventListener(USERS_CHANGED_EVENT, handleUsersChanged);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleSelect(username: string) {
        setOpen(false);
        navigate(`/profile/${username}`);
    }

    function handleRemove(username: string) {
        removeUser(username);
        deleteNotes(username);
        if (location.pathname === `/profile/${username}`) {
            navigate("/");
        }
    }

    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="rounded border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
            >
                Users {open ? "▲" : "▼"}
            </button>
            {open && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    {users.length === 0 ? (
                        <p className="p-3 text-sm text-gray-500 dark:text-gray-400">No users yet</p>
                    ) : (
                        <ul className="max-h-64 overflow-y-auto py-1">
                            {users.map((username) => (
                                <li
                                    key={username}
                                    className="flex items-center justify-between gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(username)}
                                        className="flex-1 truncate text-left text-sm"
                                    >
                                        {username}
                                    </button>
                                    <DeleteButton
                                        label={`Remove ${username}`}
                                        onClick={() => handleRemove(username)}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
