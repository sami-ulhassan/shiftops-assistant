import type { Task } from "../../types/task";

interface TaskCardProps {
    task: Task;
    onTakeOver: () => void;
    onStatusChange: (status: Task["status"]) => void;
}

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

            <p className="mt-3 text-xs text-gray-500">
                Zugewiesen an: {task.assignedTo || "Nicht zugewiesen"}
            </p>

            <select
                value={task.status}
                onChange={(event) => onStatusChange(event.target.value as Task["status"])}
                className="mt-3 w-full rounded-md border px-2 py-1 text-sm"
            >
                <option value="open">Offen</option>
                <option value="in_progress">In Bearbeitung</option>
                <option value="done">Erledigt</option>
            </select>

            <button
                onClick={onTakeOver}
                className="mt-3 w-full rounded-md bg-gray-900 px-3 py-2 text-xs font-medium text-white"
            >
                Aufgabe übernehmen
            </button>
        </article>
    );
}