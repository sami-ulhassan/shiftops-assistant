import { create } from "zustand";
import { sampleTasks } from "../data/sampleTasks";
import type { ShiftId, Task, TaskStatus } from "../types/task";

interface TaskStore {
    tasks: Task[];
    updateTaskStatus: (taskId: string, status: TaskStatus) => void;
    takeOverTask: (taskId: string, newShiftId: ShiftId) => void;
    addTask: (task: Omit<Task, "id">) => void;

}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: sampleTasks,

    updateTaskStatus: (taskId, status) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === taskId ? { ...task, status } : task
            ),
        })),

    takeOverTask: (taskId, newShiftId) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === taskId ? { ...task, shiftId: newShiftId } : task
            ),
        })),

    addTask: (task) =>
        set((state) => ({
            tasks: [
                ...state.tasks,
                {
                    ...task,
                    id: crypto.randomUUID(),
                },
            ],
        })),

}));