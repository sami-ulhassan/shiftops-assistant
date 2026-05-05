import { create } from "zustand";
import type { EmailTemplate } from "../types/template";

interface TemplateStore {
  templates: EmailTemplate[];
  addTemplate: (template: Omit<EmailTemplate, "id">) => void;
}

export const useTemplateStore = create<TemplateStore>((set) => ({
  templates: [],

  addTemplate: (template) =>
    set((state) => ({
      templates: [
        ...state.templates,
        {
          ...template,
          id: crypto.randomUUID(),
        },
      ],
    })),
}));