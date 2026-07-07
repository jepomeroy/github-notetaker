import type { GithubUser } from "~/utils/helpers";

interface UserProfileProps {
    bio: GithubUser;
}

export default function UserProfile({ bio }: UserProfileProps) {
    return (
        <div>
            <h3 className="mb-2 text-lg font-semibold">User Profile</h3>
            <ul className="divide-y divide-gray-200 rounded border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                {bio.avatar_url && (
                    <li className="p-3">
                        <img src={bio.avatar_url} className="h-24 w-24 rounded-full" alt={bio.login} />
                    </li>
                )}
                {bio.name && <li className="p-3">Name: {bio.name}</li>}
                {bio.login && <li className="p-3">Username: {bio.login}</li>}
                {bio.email && <li className="p-3">Email: {bio.email}</li>}
                {bio.location && <li className="p-3">Location: {bio.location}</li>}
                {bio.company && <li className="p-3">Company: {bio.company}</li>}
                {bio.followers > 0 && <li className="p-3">Followers: {bio.followers}</li>}
                {bio.following > 0 && <li className="p-3">Following: {bio.following}</li>}
                {bio.public_repos > 0 && <li className="p-3">Public Repos: {bio.public_repos}</li>}
                {bio.blog && (
                    <li className="p-3">
                        Blog:{" "}
                        <a href={bio.blog} className="text-blue-600 hover:underline dark:text-blue-400">
                            {bio.blog}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
}
