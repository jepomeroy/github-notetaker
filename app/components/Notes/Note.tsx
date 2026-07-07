import DeleteButton from "~/components/DeleteButton";

interface NoteProps {
    note: string;
    id: number;
    deleteNote: (index: number) => void;
}

export default function Note({ note, id, deleteNote }: NoteProps) {
    return (
        <div className="mb-2 flex items-center gap-2 rounded-lg bg-gray-100 p-2 dark:bg-gray-800">
            <DeleteButton label={`Delete note ${id + 1}`} onClick={() => deleteNote(id)} />
            <p className="text-sm text-gray-800 dark:text-gray-200">{note}</p>
        </div>
    );
}
