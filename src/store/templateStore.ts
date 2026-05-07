import { create } from "zustand";
import type { EmailTemplate } from "../types/template";

const STORAGE_KEY = "shiftops_email_templates";

function loadTemplates(): EmailTemplate[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveTemplates(templates: EmailTemplate[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
}

interface TemplateStore {
  templates: EmailTemplate[];
  addTemplate: (template: Omit<EmailTemplate, "id">) => void;
}

export const useTemplateStore = create<TemplateStore>((set) => ({
  templates: loadTemplates(),

  addTemplate: (template) =>
    set((state) => {
      const updated = [
        ...state.templates,
        {
          ...template,
          id: crypto.randomUUID(),
        },
      ];

      saveTemplates(updated);

      return { templates: updated };
    }),
}));