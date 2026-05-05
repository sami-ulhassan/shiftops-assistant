import { useState } from "react";
import { shifts } from "../../data/shifts";
import { useHandoverStore } from "../../store/handoverStore";

export default function HandoverNotes() {
  const { notes, addNote } = useHandoverStore();

  const [shiftId, setShiftId] = useState("801");
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!note.trim()) return;

    addNote({ shiftId, note });
    setNote("");
  }

  return (
    <div className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Übergabe Notizen</h2>

      <form onSubmit={handleSubmit} className="mb-4 space-y-3">
        <select
          value={shiftId}
          onChange={(e) => setShiftId(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        >
          {shifts.map((shift) => (
            <option key={shift.id} value={shift.id}>
              {shift.label}
            </option>
          ))}
        </select>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Notiz für nächste Schicht..."
          className="w-full rounded-md border px-3 py-2"
        />

        <button className="rounded-md bg-gray-900 px-4 py-2 text-white">
          Speichern
        </button>
      </form>

      <div className="space-y-2">
        {notes.map((n) => (
          <div key={n.id} className="rounded-md border p-3 text-sm">
            <p className="font-medium">{n.shiftId}</p>
            <p>{n.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}