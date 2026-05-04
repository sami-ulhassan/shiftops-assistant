import ShiftBoard from "../components/tasks/ShiftBoard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        ShiftOps Assistant
      </h1>

      <ShiftBoard />
    </main>
  );
}