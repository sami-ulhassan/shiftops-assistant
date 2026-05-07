import { create } from "zustand";
import type { HandoverNote } from "../types/handover";

const STORAGE_KEY = "shiftops_handover_notes";

function loadHandoverNotes(): HandoverNote[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveHandoverNotes(items: HandoverNote[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

interface HandoverStore {
  notes: HandoverNote[];
  addNote: (note: Omit<HandoverNote, "id" | "createdAt">) => void;
}

export const useHandoverStore = create<HandoverStore>((set) => ({
  notes: loadHandoverNotes(),

  addNote: (note) =>
    set((state) => {
      const updated = [
        ...state.notes,
        {
          ...note,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        },
      ];
      saveHandoverNotes(updated);
      return { notes: updated };
    }),
}));