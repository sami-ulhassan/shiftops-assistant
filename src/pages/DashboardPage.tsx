import ShiftBoard from "../components/tasks/ShiftBoard";
import TaskForm from "../components/tasks/TaskForm";

export default function DashboardPage() {
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
      <ShiftBoard />
    </>
  );
}