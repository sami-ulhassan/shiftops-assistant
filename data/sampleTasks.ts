import type { Task } from "../types/task";

export const sampleTasks: Task[] = [
  {
    id: "1",
    title: "Fahrer wegen verspäteter Abholung kontaktieren",
    description: "Route 14 prüfen und Rückmeldung dokumentieren.",
    shiftId: "801",
    assignedTo: "Mitarbeiter 801",
    status: "open",
    priority: "high",
  },
  {
    id: "2",
    title: "Sendungsstatus im System aktualisieren",
    description: "Offene Zustellungen aus Exportliste kontrollieren.",
    shiftId: "804",
    assignedTo: "Mitarbeiter 804",
    status: "in_progress",
    priority: "medium",
  },
];