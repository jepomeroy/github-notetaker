import type { GithubRepo } from "~/utils/helpers";

interface ReposProps {
    repos: GithubRepo[];
}

export default function Repos({ repos }: ReposProps) {
    return (
        <div>
            <h3 className="mb-2 text-lg font-semibold">User Repos</h3>
            <ul className="divide-y divide-gray-200 rounded border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                {repos.map((repo) => (
                    <li key={repo.id} className="p-3">
                        {repo.html_url && (
                            <h4 className="font-medium">
                                <a
                                    href={repo.html_url}
                                    className="text-blue-600 hover:underline dark:text-blue-400"
                                >
                                    {repo.name}
                                </a>
                            </h4>
                        )}
                        {repo.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {repo.description}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
