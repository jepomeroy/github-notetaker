import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Repos from "~/components/Github/Repos";
import UserProfile from "~/components/Github/UserProfile";
import Notes from "~/components/Notes/Notes";
import { getGitHubInfo, type GithubRepo, type GithubUser } from "~/utils/helpers";
import { getNotes, saveNotes } from "~/utils/notesStorage";
import { addUser } from "~/utils/usersStorage";

export default function Profile() {
    const { username } = useParams<{ username: string }>();
    const [bio, setBio] = useState<GithubUser | null>(null);
    const [repos, setRepos] = useState<GithubRepo[]>([]);
    const [notes, setNotes] = useState<string[]>([]);

    useEffect(() => {
        if (!username) return;

        addUser(username);
        setNotes(getNotes(username));

        let cancelled = false;
        getGitHubInfo(username).then((info) => {
            if (cancelled) return;
            setBio(info.bio);
            setRepos(info.repos);
        });

        return () => {
            cancelled = true;
        };
    }, [username]);

    if (!username) return null;

    function handleAddNote(newNote: string) {
        const updated = [...notes, newNote];
        setNotes(updated);
        saveNotes(username!, updated);
    }

    function handleDeleteNote(index: number) {
        const updated = notes.filter((_, i) => i !== index);
        setNotes(updated);
        saveNotes(username!, updated);
    }

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr_280px]">
            <div>{bio && <UserProfile bio={bio} />}</div>
            <div>
                <h3 className="mb-2 text-lg font-semibold">{username}</h3>
                <Repos repos={repos} />
            </div>
            <div>
                <Notes username={username} notes={notes} addNote={handleAddNote} deleteNote={handleDeleteNote} />
            </div>
        </div>
    );
}
