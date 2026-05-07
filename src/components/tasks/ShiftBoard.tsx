import { shifts } from "../../data/shifts";
import { useTaskStore } from "../../store/taskStore";
import TaskCard from "./TaskCard";

export default function ShiftBoard() {
  const tasks = useTaskStore((state) => state.tasks);
  const takeOverTask = useTaskStore((state) => state.takeOverTask);
  const updateTaskStatus = useTaskStore((state) => state.updateTaskStatus);

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid min-w-[1400px] grid-cols-5 gap-4">
        {shifts.map((shift) => {
          const shiftTasks = tasks.filter((task) => task.shiftId === shift.id);

          return (
            <div key={shift.id} className="flex flex-col rounded-xl border bg-white p-4 shadow-sm">
              <h2 className="mb-3 text-sm font-semibold text-gray-700">{shift.label}</h2>

              <div className="mt-4 space-y-3">
                {shiftTasks.length === 0 ? (
                  <div className="rounded-md border border-dashed p-4 text-center text-xs text-gray-400">
                    Keine Aufgaben in dieser Schicht
                    <br />
                    <span className="text-gray-300">
                      Neue Aufgaben können oben erstellt werden
                    </span>
                  </div>
                ) : (
                  shiftTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onTakeOver={() => takeOverTask(task.id, "803")}
                      onStatusChange={(status) => updateTaskStatus(task.id, status)}
                    />
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}