import axios from "axios";

export interface GithubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
}

export interface GithubUser {
    login: string;
    name: string | null;
    email: string | null;
    avatar_url: string;
    location: string | null;
    company: string | null;
    followers: number;
    following: number;
    public_repos: number;
    blog: string | null;
}

export interface GithubInfo {
    bio: GithubUser;
    repos: GithubRepo[];
}

function getRepos(username: string) {
    return axios.get<GithubRepo[]>(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username: string) {
    return axios.get<GithubUser>(`https://api.github.com/users/${username}`);
}

export async function getGitHubInfo(username: string): Promise<GithubInfo> {
    const [repos, bio] = await Promise.all([getRepos(username), getUserInfo(username)]);
    return {
        repos: repos.data,
        bio: bio.data,
    };
}
