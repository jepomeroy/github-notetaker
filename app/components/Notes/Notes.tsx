import AddNote from "./AddNote";
import NotesList from "./NotesList";

interface NotesProps {
    username: string;
    notes: string[];
    addNote: (note: string) => void;
    deleteNote: (index: number) => void;
}

export default function Notes({ username, notes, addNote, deleteNote }: NotesProps) {
    return (
        <div>
            <h3 className="mb-2 text-lg font-semibold">Notes for {username}</h3>
            <AddNote addNote={addNote} />
            <div className="mt-3">
                <NotesList notes={notes} deleteNote={deleteNote} />
            </div>
        </div>
    );
}
