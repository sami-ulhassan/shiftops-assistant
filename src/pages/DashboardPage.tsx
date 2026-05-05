import ShiftBoard from "../components/tasks/ShiftBoard";
import TaskForm from "../components/tasks/TaskForm";
import HandoverNotes from "../components/handover/HandoverNotes";
import EmailTemplates from "../components/templates/EmailTemplates";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        ShiftOps Assistant
      </h1>

      <TaskForm />
      <HandoverNotes />
      <EmailTemplates />
      <ShiftBoard />
    </main>
  );
}