import type { Task } from "../../types/task";

interface TaskCardProps {
    task: Task;
    onTakeOver: () => void;
    onStatusChange: (status: Task["status"]) => void;
}

const CURRENT_USER = "Du";

export default function TaskCard({
    task,
    onTakeOver,
    onStatusChange,
}: TaskCardProps) {
    return (
        <article className="min-w-0 rounded-lg border bg-white p-3 shadow-sm transition-shadow duration-200 hover:shadow-lg">
            <div className="flex items-start gap-2">
                <h3 className="min-w-0 flex-1 break-words text-sm font-semibold text-gray-900">
                    {task.title}
                </h3>

                <span className="shrink-0 whitespace-nowrap rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    {task.priority}
                </span>
            </div>

            <p className="mt-2 text-sm text-gray-600">{task.description}</p>

            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>
                    Zugewiesen an: {task.assignedTo || "Nicht zugewiesen"}
                </span>

                {task.assignedTo === "Du" && (
                    <span className="text-green-600">• von dir übernommen</span>
                )}
            </div>

            <div className="mt-3 flex flex-wrap gap-1 text-[11px]">
                {[
                    { label: "Offen", value: "open" },
                    { label: "In Bearbeitung", value: "in_progress" },
                    { label: "Erledigt", value: "done" },
                ].map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onStatusChange(option.value as typeof task.status)}
                        className={`rounded px-2 py-1 whitespace-nowrap ${task.status === option.value
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            <button
                onClick={onTakeOver}
                className="mt-3 w-full rounded-md border px-3 py-2 text-xs font-medium transition hover:bg-gray-100"
            >
                übernehmen
            </button>
        </article>
    );
}