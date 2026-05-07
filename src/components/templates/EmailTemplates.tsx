import { useState } from "react";
import { useTemplateStore } from "../../store/templateStore";

export default function EmailTemplates() {
  const templates = useTemplateStore((state) => state.templates);
  const addTemplate = useTemplateStore((state) => state.addTemplate);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Verzögerung");
  const [content, setContent] = useState("");

  const [copiedId, setCopiedId] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) return;

    addTemplate({
      title,
      category,
      content,
    });

    setTitle("");
    setCategory("Verzögerung");
    setContent("");
  }

  function copyTemplate(text: string, id: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);

    setTimeout(() => setCopiedId(null), 1500);
  }

  return (
    <section className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        E-Mail Vorlagen
      </h2>

      <form onSubmit={handleSubmit} className="mb-5 space-y-3">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Titel der Vorlage"
          className="w-full rounded-md border px-3 py-2 text-sm"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full rounded-md border px-3 py-2 text-sm"
        >
          <option value="Verzögerung">Verzögerung</option>
          <option value="Bestätigung">Bestätigung</option>
          <option value="Rückfrage">Rückfrage</option>
          <option value="Abgeschlossen">Abgeschlossen</option>
        </select>

        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="E-Mail Text auf Deutsch..."
          className="min-h-28 w-full rounded-md border px-3 py-2 text-sm"
        />

        <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white">
          Vorlage speichern
        </button>
      </form>

      <div className="space-y-3">
        {templates.length === 0 ? (
          <p className="text-sm text-gray-500">Noch keine Vorlagen gespeichert.</p>
        ) : (
          templates.map((template) => (
            <article key={template.id} className="rounded-lg border p-3">
              <div className="mb-2 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium text-gray-900">{template.title}</h3>
                  <p className="text-xs text-gray-500">{template.category}</p>
                </div>

                <button
                  onClick={() => copyTemplate(template.content, template.id)}
                  className="text-xs text-gray-500 hover:text-gray-900"
                >
                  {copiedId === template.id ? "Kopiert" : "Kopieren"}
                </button>
              </div>

              <p className="whitespace-pre-wrap text-sm text-gray-700">
                {template.content}
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}