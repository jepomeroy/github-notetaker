import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";

import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>React Github Notetaker</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <Meta />
                <Links />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function() {
                            try {
                                var theme = localStorage.getItem("theme");
                                if (!theme) {
                                    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                                }
                                if (theme === "dark") document.documentElement.classList.add("dark");
                            } catch (e) {}
                        })();`,
                    }}
                />
            </head>
            <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="mx-auto max-w-2xl p-8 text-center">
            <h1 className="text-2xl font-bold">{message}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{details}</p>
            {stack && (
                <pre className="mt-4 overflow-x-auto rounded bg-gray-100 p-4 text-left text-sm dark:bg-gray-800">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
