import { Outlet } from "react-router";
import SearchGithub from "~/components/SearchGithub";
import ThemeToggle from "~/components/ThemeToggle";
import UserDropdown from "~/components/UserDropdown";

export default function Layout() {
    return (
        <div>
            <nav className="border-b border-gray-200 bg-gray-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="mx-auto flex max-w-6xl items-center gap-3">
                    <div className="flex-1">
                        <SearchGithub />
                    </div>
                    <UserDropdown />
                    <ThemeToggle />
                </div>
            </nav>
            <div className="mx-auto max-w-6xl p-4">
                <Outlet />
            </div>
        </div>
    );
}
