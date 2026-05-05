import { useState } from "react";
import { shifts } from "../../data/shifts";
import { useTaskStore } from "../../store/taskStore";
import type { ShiftId, TaskPriority, TaskStatus } from "../../types/task";

export default function TaskForm() {
    const addTask = useTaskStore((state) => state.addTask);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [shiftId, setShiftId] = useState<ShiftId>("801");
    const [assignedTo, setAssignedTo] = useState("");
    const [status, setStatus] = useState<TaskStatus>("open");
    const [priority, setPriority] = useState<TaskPriority>("medium");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!title.trim()) return;

        addTask({
            title,
            description,
            shiftId,
            assignedTo,
            status,
            priority,
        });

        setTitle("");
        setDescription("");
        setAssignedTo("");
        setStatus("open");
        setPriority("medium");
        setShiftId("801");
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Neue Aufgabe</h2>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Aufgabentitel"
                    className="rounded-md border px-3 py-2 text-sm"
                />

                <input
                    value={assignedTo}
                    onChange={(event) => setAssignedTo(event.target.value)}
                    placeholder="Zugewiesen an"
                    className="rounded-md border px-3 py-2 text-sm"
                />

                <select
                    value={shiftId}
                    onChange={(event) => setShiftId(event.target.value as ShiftId)}
                    className="rounded-md border px-3 py-2 text-sm"
                >
                    {shifts.map((shift) => (
                        <option key={shift.id} value={shift.id}>
                            {shift.label}
                        </option>
                    ))}
                </select>

                <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value as TaskStatus)}
                    className="rounded-md border px-3 py-2 text-sm"
                >
                    <option value="open">Offen</option>
                    <option value="in_progress">In Bearbeitung</option>
                    <option value="done">Erledigt</option>
                </select>

                <select
                    value={priority}
                    onChange={(event) => setPriority(event.target.value as TaskPriority)}
                    className="rounded-md border px-3 py-2 text-sm"
                >
                    <option value="low">Niedrig</option>
                    <option value="medium">Mittel</option>
                    <option value="high">Hoch</option>
                </select>

                <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white">
                    Aufgabe erstellen
                </button>

            </div>

            <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Beschreibung / Notiz"
                className="mt-3 w-full rounded-md border px-3 py-2 text-sm"
            />
        </form>
    );
}