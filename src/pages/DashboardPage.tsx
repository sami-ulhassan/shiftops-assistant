import { useState } from "react";
import ShiftBoard from "../components/tasks/ShiftBoard";
import TaskForm from "../components/tasks/TaskForm";
import type { TaskStatus } from "../types/task";

export default function DashboardPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all");

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Schichtübersicht
          </h2>
          <p className="text-sm text-gray-500">
            Aufgabenverwaltung und Übergaben zwischen Schichten
          </p>
        </div>

        <div className="text-right text-sm text-gray-500">
          <p>Heute</p>
          <p className="font-medium text-gray-900">
            {new Date().toLocaleDateString("de-CH")}
          </p>
        </div>
      </div>

      <TaskForm />
      
      <div className="mb-4 flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm md:flex-row">
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Aufgaben suchen..."
          className="flex-1 rounded-md border px-3 py-2 text-sm"
        />

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value as TaskStatus | "all")
          }
          className="rounded-md border px-3 py-2 text-sm"
        >
          <option value="all">Alle Status</option>
          <option value="open">Offen</option>
          <option value="in_progress">In Bearbeitung</option>
          <option value="done">Erledigt</option>
        </select>
      </div>

      <ShiftBoard searchTerm={searchTerm} statusFilter={statusFilter} />
    </>
  );
}