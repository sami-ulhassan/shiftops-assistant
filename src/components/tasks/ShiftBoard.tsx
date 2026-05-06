import { shifts } from "../../data/shifts";
import { useTaskStore } from "../../store/taskStore";

export default function ShiftBoard() {
  const tasks = useTaskStore((state) => state.tasks);
  const takeOverTask = useTaskStore((state) => state.takeOverTask);
  const updateTaskStatus = useTaskStore((state) => state.updateTaskStatus);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      {shifts.map((shift) => {
        const shiftTasks = tasks.filter((task) => task.shiftId === shift.id);

        return (
          <div key={shift.id} className="flex flex-col rounded-xl border bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-sm font-semibold text-gray-700">{shift.label}</h2>

            <div className="mt-4 space-y-3">
              {shiftTasks.length === 0 ? (
                <div className="rounded-lg border border-dashed p-4 text-sm text-gray-500">
                  Keine Aufgaben
                </div>
              ) : (
                shiftTasks.map((task) => (
                  <div
                    key={task.id}
                    className="rounded-xl border bg-gray-50 p-4 shadow-sm transition hover:shadow-md">
                    <h3 className="font-medium text-gray-900">{task.title}</h3>

                    <p className="mt-1 text-sm text-gray-600">
                      {task.description}
                    </p>

                    <select
                      value={task.status}
                      onChange={(event) =>
                        updateTaskStatus(task.id, event.target.value as typeof task.status)
                      }
                      className="mt-3 w-full rounded-md border px-2 py-1 text-sm"
                    >
                      <option value="open">Offen</option>
                      <option value="in_progress">In Bearbeitung</option>
                      <option value="done">Erledigt</option>
                    </select>

                    <p className="mt-2 text-xs text-gray-500">
                      {task.assignedTo}
                    </p>

                    <span
                      className={`inline-block rounded px-2 py-1 text-xs font-medium ${task.priority === "high"
                        ? "bg-red-100 text-red-700"
                        : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                        }`}
                    >
                      {task.priority}
                    </span>

                    <span className="text-xs text-gray-500">
                      {task.status === "open"
                        ? "Offen"
                        : task.status === "in_progress"
                          ? "In Bearbeitung"
                          : "Erledigt"}
                    </span>

                    <div className="mt-3">
                      <button
                        onClick={() => takeOverTask(task.id, "803")}
                        className="rounded-md bg-gray-900 px-3 py-1 text-xs text-white"
                      >
                        Aufgabe zu 803 übernehmen
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}