import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchGithub() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!username.trim()) return;
        navigate(`/profile/${username.trim()}`);
        setUsername("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input
                type="text"
                className="flex-1 rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
                placeholder="Github username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
                Search Github
            </button>
        </form>
    );
}
