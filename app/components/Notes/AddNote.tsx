import { useState } from "react";

interface AddNoteProps {
    addNote: (note: string) => void;
}

export default function AddNote({ addNote }: AddNoteProps) {
    const [note, setNote] = useState("");

    function handleSubmit() {
        if (!note.trim()) return;
        addNote(note.trim());
        setNote("");
    }

    return (
        <div className="flex gap-2">
            <input
                type="text"
                className="flex-1 rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
                placeholder="Add New Note"
                value={note}
                onChange={(event) => setNote(event.target.value)}
            />
            <button
                type="button"
                className="rounded bg-gray-200 px-4 py-2 font-medium hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}
