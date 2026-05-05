import { create } from "zustand";
import type { HandoverNote } from "../types/handover";

interface HandoverStore {
  notes: HandoverNote[];
  addNote: (note: Omit<HandoverNote, "id" | "createdAt">) => void;
}

export const useHandoverStore = create<HandoverStore>((set) => ({
  notes: [],

  addNote: (note) =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          ...note,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        },
      ],
    })),
}));