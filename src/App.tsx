import { useState } from "react";
import DashboardPage from "./pages/DashboardPage";
import HandoverNotes from "./components/handover/HandoverNotes";
import EmailTemplates from "./components/templates/EmailTemplates";

type ActivePage = "tasks" | "handover" | "templates";

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>("tasks");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">
          ShiftOps Assistant
        </h1>
        <p className="text-sm text-gray-500">
          Shift handover and communication tool for logistics teams
        </p>
      </header>

      <div className="flex">
        <aside className="min-h-[calc(100vh-81px)] w-64 border-r bg-white p-4">
          <nav className="space-y-2">
            <button
              onClick={() => setActivePage("tasks")}
              className={`w-full rounded-md px-3 py-2 text-left text-sm ${
                activePage === "tasks"
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Aufgaben
            </button>

            <button
              onClick={() => setActivePage("handover")}
              className={`w-full rounded-md px-3 py-2 text-left text-sm ${
                activePage === "handover"
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Übergabe Notizen
            </button>

            <button
              onClick={() => setActivePage("templates")}
              className={`w-full rounded-md px-3 py-2 text-left text-sm ${
                activePage === "templates"
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              E-Mail Vorlagen
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {activePage === "tasks" && <DashboardPage />}
          {activePage === "handover" && <HandoverNotes />}
          {activePage === "templates" && <EmailTemplates />}
        </main>
      </div>
    </div>
  );
}