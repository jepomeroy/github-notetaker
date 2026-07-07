import Note from "./Note";

interface NotesListProps {
    notes: string[];
    deleteNote: (index: number) => void;
}

export default function NotesList({ notes, deleteNote }: NotesListProps) {
    return (
        <ul className="divide-y divide-gray-200 rounded border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
            {notes.map((note, index) => (
                <li key={index} className="p-3">
                    <Note note={note} id={index} deleteNote={deleteNote} />
                </li>
            ))}
        </ul>
    );
}
