export type ShiftId = "800" | "801" | "802" | "803" | "804";

export type TaskStatus = "open" | "in_progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description: string;
  shiftId: ShiftId;
  assignedTo: string;
  status: TaskStatus;
  priority: TaskPriority;
}