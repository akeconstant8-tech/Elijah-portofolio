import { createFileRoute } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { SiteFrame } from "@/components/SiteFrame";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sagne Ake Pierre Constant" },
      {
        name: "description",
        content:
          "Écrivez à Sagne Ake Pierre Constant (ElijahCodex) — développeur front-end. Email, GitHub, LinkedIn et formulaire de contact.",
      },
      { property: "og:title", content: "Contact — Sagne Ake Pierre Constant" },
      {
        property: "og:description",
        content: "Formulaire de contact et liens vers email & réseaux.",
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Votre nom est requis (2 caractères min.)" })
    .max(80, { message: "Nom trop long (80 max.)" }),
  email: z
    .string()
    .trim()
    .email({ message: "Adresse email invalide" })
    .max(160, { message: "Email trop long" }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Objet trop court" })
    .max(120, { message: "Objet trop long" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message trop court (10 caractères min.)" })
    .max(1500, { message: "Message trop long (1500 max.)" }),
});

type FormValues = z.infer<typeof contactSchema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = { name: "", email: "", subject: "", message: "" };

const links = [
  { label: "Email", value: "akeconstant8@gmail.com", href: "mailto:akeconstant8@gmail.com" },
  { label: "Téléphone", value: "+225 07 87 67 58 86", href: "tel:+2250787675886" },
  {
    label: "WhatsApp",
    value: "+225 07 87 67 58 86",
    href: `https://wa.me/2250787675886?text=${encodeURIComponent("Bonjour Constant, j'aimerais échanger avec vous au sujet d'un projet.")}`,
  },
  {
    label: "GitHub",
    value: "github.com/akeconstant8-tech",
    href: "https://github.com/akeconstant8-tech",
  },
];

function ContactPage() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const handleChange =
    (key: keyof FormValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    const body = `${result.data.message}\n\n— ${result.data.name} (${result.data.email})`;
    const url = `mailto:akeconstant8@gmail.com?subject=${encodeURIComponent(result.data.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
    setValues(initial);
  };

  return (
    <SiteFrame chapter="Chapitre III" section="Contact" pageNumber="004">
      <article className="bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]">
        <div className="px-6 sm:px-12 md:px-20 pt-12 sm:pt-20 pb-10 sm:pb-14 border-b border-[#22c55e]/15">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
            ◆ Écrire à l'auteur
          </p>
          <h1 className="mt-6 font-display font-light leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight max-w-4xl text-[#ffffff]">
            Disons-nous
            <br />
            <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
              bonjour
            </span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-[#ffffff]/75">
            Un projet, une collaboration, ou simplement une question ? Remplissez le formulaire ou
            écrivez-moi directement — je réponds sous 48 h.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-8 px-6 sm:px-12 md:px-20 py-12 sm:py-16 border-b md:border-b-0 md:border-r border-[#22c55e]/15">
            <form noValidate onSubmit={onSubmit} className="space-y-8">
              <Field
                label="Nom"
                id="name"
                error={errors.name}
                input={
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    maxLength={80}
                    value={values.name}
                    onChange={handleChange("name")}
                    className="w-full bg-transparent border-0 border-b border-[#22c55e]/30 focus:border-[#22c55e] focus:outline-none py-3 font-display text-xl text-[#ffffff] placeholder:text-[#ffffff]/30 transition"
                    placeholder="Votre nom"
                  />
                }
              />
              <Field
                label="Email"
                id="email"
                error={errors.email}
                input={
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    maxLength={160}
                    value={values.email}
                    onChange={handleChange("email")}
                    className="w-full bg-transparent border-0 border-b border-[#22c55e]/30 focus:border-[#22c55e] focus:outline-none py-3 font-display text-xl text-[#ffffff] placeholder:text-[#ffffff]/30 transition"
                    placeholder="vous@domaine.com"
                  />
                }
              />
              <Field
                label="Objet"
                id="subject"
                error={errors.subject}
                input={
                  <input
                    id="subject"
                    type="text"
                    maxLength={120}
                    value={values.subject}
                    onChange={handleChange("subject")}
                    className="w-full bg-transparent border-0 border-b border-[#22c55e]/30 focus:border-[#22c55e] focus:outline-none py-3 font-display text-xl text-[#ffffff] placeholder:text-[#ffffff]/30 transition"
                    placeholder="De quoi parlons-nous ?"
                  />
                }
              />
              <Field
                label="Message"
                id="message"
                hint={`${values.message.length} / 1500`}
                error={errors.message}
                input={
                  <textarea
                    id="message"
                    rows={6}
                    maxLength={1500}
                    value={values.message}
                    onChange={handleChange("message")}
                    className="w-full bg-transparent border-0 border-b border-[#22c55e]/30 focus:border-[#22c55e] focus:outline-none py-3 text-base leading-relaxed text-[#ffffff] placeholder:text-[#ffffff]/30 resize-none transition"
                    placeholder="Parlez-moi de votre projet…"
                  />
                }
              />

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="group btn-lux inline-flex items-center justify-center gap-3 bg-[#22c55e] text-[#071510] px-8 py-4 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#22c55e] transition shadow-[0_10px_30px_-10px_rgba(34, 197, 94,0.6)]"
                >
                  Envoyer le message
                  <span aria-hidden className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
                <a
                  href={`https://wa.me/2250787675886?text=${encodeURIComponent("Bonjour Constant, j'aimerais échanger avec vous au sujet d'un projet.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Me contacter directement sur WhatsApp"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-[#128C7E] via-[#25D366] to-[#1ebe5d] text-white px-7 py-4 text-[11px] tracking-[0.3em] uppercase font-semibold transition-all duration-300 hover:shadow-[0_18px_40px_-12px_rgba(37,211,102,0.7)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071510]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]"
                  />
                  <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.821 11.821 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.671 5.503l-.999 3.648 3.817-.85zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                    </svg>
                  </span>
                  <span className="relative flex flex-col items-start leading-tight">
                    <span className="text-[8px] tracking-[0.4em] uppercase text-white/75">
                      Réponse rapide
                    </span>
                    <span className="text-[11px] tracking-[0.3em]">WhatsApp direct</span>
                  </span>
                  <span
                    aria-hidden
                    className="relative ml-1 inline-flex h-2 w-2 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.25)] animate-pulse"
                  />
                </a>
                {sent && (
                  <span className="text-[11px] tracking-[0.3em] uppercase text-[#22c55e]">
                    ✓ Client mail ouvert
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Side links */}
          <aside className="md:col-span-4 px-6 sm:px-12 md:px-12 py-12 sm:py-16 bg-[#071510]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">§ Direct</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl leading-tight text-[#ffffff]">
              Liens <span className="italic text-[#22c55e]">utiles</span>.
            </h2>

            <ul className="mt-8 space-y-5">
              {links.map((l) => (
                <li key={l.label} className="border-t border-[#22c55e]/20 pt-4">
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    <div className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/70">
                      {l.label}
                    </div>
                    <div className="mt-1 font-display text-lg text-[#ffffff] group-hover:text-[#22c55e] group-hover:italic transition-all break-all">
                      {l.value}
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-[11px] tracking-[0.35em] uppercase text-[#ffffff]/45 leading-relaxed">
              Abidjan · Côte d'Ivoire
              <br />
              <span className="text-[#22c55e]/70">GMT +0 · disponible en remote</span>
            </div>
          </aside>
        </div>
      </article>
    </SiteFrame>
  );
}

function Field({
  label,
  id,
  input,
  error,
  hint,
}: {
  label: string;
  id: string;
  input: ReactNode;
  error?: string;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
          {label}
        </label>
        {hint && (
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#ffffff]/35">{hint}</span>
        )}
      </div>
      {input}
      {error && <p className="mt-2 text-xs text-red-400 font-medium">{error}</p>}
    </div>
  );
}
