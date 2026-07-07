interface DeleteButtonProps {
    label: string;
    onClick: () => void;
}

export default function DeleteButton({ label, onClick }: DeleteButtonProps) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold leading-none text-gray-700 hover:bg-red-200 hover:text-red-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-red-900 dark:hover:text-red-300"
        >
            ×
        </button>
    );
}
