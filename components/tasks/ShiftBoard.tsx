import { shifts } from "../../data/shifts";
import { sampleTasks } from "../../data/sampleTasks";

export default function ShiftBoard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      {shifts.map((shift) => {
        const tasks = sampleTasks.filter((task) => task.shiftId === shift.id);

        return (
          <div key={shift.id} className="rounded-xl border bg-white p-4 shadow-sm">
            <h2 className="font-semibold text-gray-900">{shift.label}</h2>

            <div className="mt-4 space-y-3">
              {tasks.length === 0 ? (
                <div className="rounded-lg border border-dashed p-4 text-sm text-gray-500">
                  Keine Aufgaben
                </div>
              ) : (
                tasks.map((task) => (
                  <div key={task.id} className="rounded-lg border p-3">
                    <h3 className="font-medium text-gray-900">{task.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{task.description}</p>
                    <p className="mt-2 text-xs text-gray-500">
                      {task.assignedTo} · {task.status} · {task.priority}
                    </p>
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