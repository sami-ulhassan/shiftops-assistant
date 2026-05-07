import { create } from "zustand";
import { sampleTasks } from "../data/sampleTasks";
import type { ShiftId, Task, TaskStatus } from "../types/task";

const STORAGE_KEY = "shiftops_tasks";

function loadTasks(): Task[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : sampleTasks;
}

function saveTasks(tasks: Task[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

interface TaskStore {
    tasks: Task[];
    updateTaskStatus: (taskId: string, status: TaskStatus) => void;
    takeOverTask: (taskId: string, newShiftId: ShiftId) => void;
    addTask: (task: Omit<Task, "id">) => void;

}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: loadTasks(),

    updateTaskStatus: (taskId, status) =>
        set((state) => {
            const updated = state.tasks.map((task) =>
                task.id === taskId ? { ...task, status } : task
            );
            saveTasks(updated);
            return { tasks: updated };
        }),

    takeOverTask: (taskId, newShiftId) =>
        set((state) => {
            const updated = state.tasks.map((task) =>
                task.id === taskId ? { ...task, shiftId: newShiftId } : task
            );
            saveTasks(updated);
            return { tasks: updated };
        }),


    addTask: (task) =>
        set((state) => {
            const updated = [
                ...state.tasks,
                {
                    ...task,
                    id: crypto.randomUUID(),
                },
            ];
            saveTasks(updated);
            return { tasks: updated };
        }),

}));