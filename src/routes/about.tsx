import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/SiteFrame";
import portraitFullbody from "@/assets/portrait-fullbody.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Sagne Ake Pierre Constant" },
      {
        name: "description",
        content:
          "Parcours et philosophie de développement front-end de Sagne Ake Pierre Constant — rigueur, typographie et expérience utilisateur.",
      },
      { property: "og:title", content: "À propos — Sagne Ake Pierre Constant" },
      {
        property: "og:description",
        content: "Parcours et philosophie de développement front-end.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2018",
    title: "Premiers pas",
    body: "Découverte du web, HTML & CSS. Apprentissage en autodidacte, fasciné par la mise en page et la typographie.",
  },
  {
    year: "2021",
    title: "JavaScript & Bootstrap",
    body: "Montée en compétence sur l'écosystème JavaScript moderne — composants, état, accessibilité, performance.",
  },
  {
    year: "2024",
    title: "Design & Motion",
    body: "Élargissement vers le design graphique et le montage vidéo : Photoshop, Photopea, Première Pro, After Effects.",
  },
  {
    year: "2025",
    title: "Studio personnel",
    body: "Conception d'interfaces éditoriales, design systems sur mesure, attention obsessive à la qualité du détail.",
  },
  {
    year: "2026 – 2027",
    title: "GoMyCode",
    body: "Formation intensive développement web à GoMyCode — consolidation des fondamentaux et spécialisation front-end avancée.",
  },
];

const principles = [
  {
    n: "01",
    title: "La typographie d'abord",
    body: "Une grille typographique nette donne une voix au produit avant même la première couleur.",
  },
  {
    n: "02",
    title: "Performance silencieuse",
    body: "Le meilleur effet est celui qu'on ne remarque pas : chargements rapides, animations qui respirent.",
  },
  {
    n: "03",
    title: "Accessibilité comme socle",
    body: "Contraste, sémantique, navigation clavier — non négociables, intégrés dès la première ligne.",
  },
  {
    n: "04",
    title: "Détails obsessionnels",
    body: "Espacements, rythme, transitions : la qualité se cache dans les pixels qu'on ne voit pas.",
  },
];

const skillGroups = [
  {
    category: "Front-end",
    caption: "Structure & logique",
    skills: [
      { name: "HTML", value: 100 },
      { name: "JavaScript", value: 90 },
    ],
  },
  {
    category: "UI & Style",
    caption: "Mise en forme visuelle",
    skills: [{ name: "CSS", value: 90 }],
  },
  {
    category: "Outils & Frameworks",
    caption: "Accélérateurs de production",
    skills: [{ name: "Bootstrap", value: 87 }],
  },
  {
    category: "Design & Infographie",
    caption: "Image fixe & retouche",
    skills: [
      { name: "Photoshop", value: 88 },
      { name: "Photopea", value: 90 },
      { name: "Infographie", value: 85 },
    ],
  },
  {
    category: "Motion & Vidéo",
    caption: "Image en mouvement",
    skills: [
      { name: "Adobe Première Pro", value: 85 },
      { name: "After Effects", value: 80 },
      { name: "Montage vidéo", value: 87 },
    ],
  },
];

function AboutPage() {
  return (
    <SiteFrame chapter="Chapitre I" section="À propos" pageNumber="002">
      <article className="bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]">
        {/* Hero */}
        <div className="px-6 sm:px-12 md:px-20 pt-12 sm:pt-20 pb-10 sm:pb-16 border-b border-[#22c55e]/15 relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
              ◆ Un développeur, une démarche
            </p>
            <h1 className="mt-6 font-display font-light leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight max-w-4xl text-[#ffffff]">
              Construire le web
              <br />
              <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
                avec
              </span>{" "}
              intention.
            </h1>
            <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-[#ffffff]/75">
              Je m'appelle Sagne Ake Pierre Constant. Développeur web front-end basé à Abidjan, je
              conçois et code des interfaces où chaque détail — du choix de la police à la durée
              d'une transition — sert l'expérience.
            </p>
          </div>
          <div className="mx-auto md:mx-0 shrink-0">
            <div
              className="relative w-[220px] sm:w-[260px] rounded-2xl overflow-hidden border border-[#22c55e]/40 bg-white"
              style={{
                boxShadow:
                  "0 30px 80px -20px rgba(34, 197, 94,0.4), 0 0 0 1px rgba(34, 197, 94,0.25)",
              }}
            >
              <img
                src={portraitFullbody}
                alt="Sagne Ake Pierre Constant"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 px-6 sm:px-12 md:px-20 py-12 sm:py-20 border-b border-[#22c55e]/15">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">§ Parcours</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl leading-tight text-[#ffffff]">
              Une route faite de <span className="italic text-[#22c55e]">curiosité</span>.
            </h2>
          </div>
          <div className="md:col-span-8 md:pl-12 md:border-l border-[#22c55e]/15">
            <ol className="space-y-10 relative">
              {timeline.map((t) => (
                <li key={t.year} className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2">
                  <div className="font-display text-2xl text-[#22c55e] tabular-nums">{t.year}</div>
                  <div>
                    <h3 className="font-display text-xl text-[#ffffff]">{t.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#ffffff]/65">{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Philosophy */}
        <div className="px-6 sm:px-12 md:px-20 py-12 sm:py-20 bg-[#071510]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
                § Philosophie
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl leading-tight text-[#ffffff]">
                Quatre <span className="italic text-[#22c55e]">principes</span> tenaces.
              </h2>
            </div>
            <div className="md:col-span-8 md:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {principles.map((p) => (
                  <div key={p.n} className="border-t border-[#22c55e]/25 pt-5 group">
                    <div className="flex items-baseline justify-between">
                      <span className="font-display italic text-[#22c55e] text-lg">{p.n}</span>
                      <span className="text-[10px] tracking-[0.35em] uppercase text-[#ffffff]/40">
                        Règle
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl text-[#ffffff] group-hover:text-[#22c55e] transition">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#ffffff]/65">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="px-6 sm:px-12 md:px-20 py-12 sm:py-20 border-t border-[#22c55e]/15">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
                § Compétences
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl leading-tight text-[#ffffff]">
                Outils du <span className="italic text-[#22c55e]">métier</span>.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#ffffff]/60 max-w-sm">
                Trois familles d'outils qui composent ma pratique quotidienne — structurer,
                styliser, animer.
              </p>
            </div>
            <div className="md:col-span-8 md:pl-12 md:border-l border-[#22c55e]/15 space-y-12">
              {skillGroups.map((cat) => (
                <div key={cat.category}>
                  <div className="flex items-baseline justify-between border-b border-[#22c55e]/25 pb-3">
                    <h3 className="font-display text-2xl text-[#ffffff]">{cat.category}</h3>
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/70">
                      {cat.caption}
                    </span>
                  </div>
                  <div className="mt-6 space-y-6">
                    {cat.skills.map((s) => (
                      <div key={s.name}>
                        <div className="flex items-baseline justify-between">
                          <span className="font-display text-lg sm:text-xl text-[#ffffff]">
                            {s.name}
                          </span>
                          <span className="font-display tabular-nums text-base text-[#22c55e]">
                            {s.value}
                            <span className="text-[#22c55e]/50">%</span>
                          </span>
                        </div>
                        <div className="mt-3 h-[3px] bg-[#ffffff]/10 relative overflow-hidden rounded-full">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-1000 ease-out"
                            style={{
                              width: `${s.value}%`,
                              background: "linear-gradient(to right, #22c55e, #22c55e, #22c55e)",
                              boxShadow: "0 0 12px rgba(34, 197, 94,0.5)",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div className="px-6 sm:px-12 md:px-20 py-16 sm:py-24 border-t border-[#22c55e]/15 bg-gradient-to-b from-[#071510] to-[#071510]">
          <blockquote className="font-display italic text-2xl sm:text-3xl md:text-4xl leading-snug max-w-4xl text-[#ffffff]">
            <span className="text-[#22c55e] text-5xl leading-none align-top mr-2">"</span>
            Coder n'est pas seulement écrire des instructions à une machine — c'est composer une
            expérience qu'un humain traversera.
          </blockquote>
          <div className="mt-8 text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
            — Sagne Ake Pierre Constant
          </div>
        </div>
      </article>
    </SiteFrame>
  );
}
