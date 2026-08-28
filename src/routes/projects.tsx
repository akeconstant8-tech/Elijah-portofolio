import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiteFrame } from "@/components/SiteFrame";
import kingdevCover from "@/assets/project-kingdev.jpg";
import kingdevDetail1 from "@/assets/kingdev-detail-1.jpg";
import kingdevDetail2 from "@/assets/kingdev-detail-2.jpg";
import kingdevDetail3 from "@/assets/kingdev-detail-3.jpg";
import lovableCover from "@/assets/project-lovable.jpg";
import mahanaimCover from "@/assets/project-mahanaim.jpg";
import mahanaimDetail1 from "@/assets/mahanaim-detail-1.jpg";
import mahanaimDetail2 from "@/assets/mahanaim-detail-2.jpg";
import mahanaimDetail3 from "@/assets/mahanaim-detail-3.jpg";
import maitreCover from "@/assets/project-maitre.jpg";
import maitreDetail1 from "@/assets/maitre-detail-1.jpg";
import maitreDetail2 from "@/assets/maitre-detail-2.jpg";
import todoCover from "@/assets/project-todo.jpg";
import estherCover from "@/assets/project-esther.jpg";
import estherDetail1 from "@/assets/esther-detail-1.jpg";
import estherDetail2 from "@/assets/esther-detail-2.jpg";
import estherDetail3 from "@/assets/esther-detail-3.jpg";
import maisonDetail1 from "@/assets/maison-detail-1.jpg";
import maisonDetail2 from "@/assets/maison-detail-2.jpg";
import maisonDetail3 from "@/assets/maison-detail-3.jpg";
import galerieCover from "@/assets/project-galerie.jpg";
import fiwaHome from "@/assets/fiwa-home.jpg";
import etpCover from "@/assets/project-etp.jpg";
import etpDetail1 from "@/assets/etp-detail-1.jpg";
import etpDetail2 from "@/assets/etp-detail-2.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projets — Sagne Ake Pierre Constant" },
      {
        name: "description",
        content:
          "Sélection de projets front-end : sites éditoriaux, e-commerce, applications web et fintech.",
      },
      { property: "og:title", content: "Projets — Sagne Ake Pierre Constant" },
      {
        property: "og:description",
        content: "Sélection de projets front-end conçus et codés par ElijahCodex.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Category = "Front-end" | "UI" | "Outils";

type Project = {
  n: string;
  title: string;
  type: string;
  year: string;
  description: string;
  longDescription: string;
  highlights: string[];
  stack: string[];
  href: string;
  repo: string;
  cover: string;
  gallery?: { src: string; position?: string; fit?: "cover" | "contain" }[];
  categories: Category[];
  internal?: boolean;
};

const GITHUB_PROFILE = "https://github.com/akeconstant8-tech";

const projects: Project[] = [
  {
    n: "01",
    title: "KingDev Shopping",
    type: "E-commerce · Côte d'Ivoire",
    year: "2025",
    description:
      "Boutique en ligne ivoirienne : catalogue produits, fiches détaillées, parcours d'achat fluide et interface responsive soignée.",
    longDescription:
      "KingDev Shopping est une boutique en ligne pensée pour le marché ivoirien. L'objectif : offrir un parcours d'achat clair, rapide et inspirant la confiance, avec une mise en page éditoriale qui valorise les produits sans surcharge visuelle.",
    highlights: [
      "Catalogue produits filtrable et fiches détaillées soignées",
      "Parcours d'achat fluide pensé mobile-first",
      "Interface responsive et performances optimisées",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    href: "https://kingdevshopping.ci",
    repo: GITHUB_PROFILE,
    cover: kingdevCover,
    gallery: [{ src: kingdevDetail1 }, { src: kingdevDetail2 }, { src: kingdevDetail3 }],
    categories: ["Front-end", "UI", "Outils"],
  },
  {
    n: "02",
    title: "Mahanaim Luxury",
    type: "Site vitrine premium",
    year: "2025",
    description:
      "Identité digitale haut de gamme pour la marque Mahanaim Luxury : esthétique sobre, présentation produit raffinée, expérience immersive.",
    longDescription:
      "Site vitrine haut de gamme pour Mahanaim Luxury. Travail typographique soigné, hiérarchie éditoriale et animations discrètes pour soutenir la perception premium de la marque.",
    highlights: [
      "Direction artistique sobre et raffinée",
      "Mise en scène produit éditoriale",
      "Micro-interactions discrètes au service du contenu",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    href: "https://mahanaim-shop-lux.lovable.app/",
    repo: GITHUB_PROFILE,
    cover: mahanaimCover,
    gallery: [{ src: mahanaimDetail1 }, { src: mahanaimDetail2 }, { src: mahanaimDetail3 }],
    categories: ["UI", "Front-end"],
  },
  {
    n: "03",
    title: "Maître des Écritures",
    type: "Application web · Étude biblique",
    year: "2024",
    description:
      "Plateforme dédiée à l'étude des Écritures : recherche par livre/chapitre, mise en page typographique soignée, navigation rapide et lisibilité éditoriale.",
    longDescription:
      "Application web dédiée à l'étude des Écritures, avec une attention particulière portée à la lisibilité, à la typographie et à la rapidité de navigation entre livres et chapitres.",
    highlights: [
      "Recherche par livre, chapitre et verset",
      "Mise en page typographique calme et lisible",
      "Navigation rapide au clavier",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    href: "https://maitres-des-ecritures.vercel.app/",
    repo: GITHUB_PROFILE,
    cover: maitreCover,
    gallery: [{ src: maitreDetail1 }, { src: maitreDetail2, fit: "contain" }],
    categories: ["Front-end", "Outils"],
  },
  {
    n: "04",
    title: "Application TODO",
    type: "App productivité · Web",
    year: "2024",
    description:
      "Gestionnaire de tâches minimaliste : création, priorisation et complétion en local. Interface épurée, raccourcis clavier, persistance des données.",
    longDescription:
      "Une application de gestion de tâches minimaliste centrée sur la rapidité et la clarté. Persistance locale, raccourcis clavier et interface épurée pour ne garder que l'essentiel.",
    highlights: [
      "Création, édition et priorisation des tâches",
      "Persistance locale sans compte requis",
      "Interface épurée et raccourcis clavier",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://app-todo-9sez.vercel.app/",
    repo: GITHUB_PROFILE,
    cover: todoCover,
    categories: ["Front-end"],
  },
  {
    n: "05",
    title: "Esther Transfert",
    type: "Fintech · Transfert d'argent",
    year: "2025",
    description:
      "Interface de transfert d'argent : tableau de bord, suivi des transactions, formulaires sécurisés. Design clair, parcours pensé pour la confiance.",
    longDescription:
      "Interface fintech dédiée au transfert d'argent. Design rassurant, hiérarchie claire des informations sensibles et parcours utilisateur pensé pour limiter les frictions.",
    highlights: [
      "Tableau de bord clair et lisible",
      "Suivi des transactions en temps réel",
      "Formulaires soignés et messages d'erreur explicites",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    href: "https://esther-transfert.vercel.app/",
    repo: GITHUB_PROFILE,
    cover: estherCover,
    gallery: [{ src: estherDetail1 }, { src: estherDetail2 }, { src: estherDetail3 }],
    categories: ["Front-end", "Outils"],
  },
  {
    n: "06",
    title: "Maison Intègre",
    type: "Site vitrine · Pixel Perfection",
    year: "2025",
    description:
      "Plateforme de mise en relation : nounous qualifiées, chauffeurs et femmes de ménage de confiance. Design soigné, parcours clair et conversion fluide.",
    longDescription:
      "Plateforme de mise en relation entre familles et professionnels de confiance (nounous, chauffeurs, femmes de ménage). Identité chaleureuse, parcours clair et tunnel de conversion optimisé.",
    highlights: [
      "Pages de service éditorialisées",
      "Parcours de réservation simplifié",
      "Composants React réutilisables et accessibles",
    ],
    stack: ["React", "Tailwind", "Lovable"],
    href: "https://pixel-perfection-project-35.lovable.app/",
    repo: GITHUB_PROFILE,
    cover: lovableCover,
    gallery: [{ src: maisonDetail1 }, { src: maisonDetail2 }, { src: maisonDetail3 }],
    categories: ["UI", "Front-end"],
  },
  {
    n: "07",
    title: "Galerie Produits",
    type: "Vitrine produits · Showcase",
    year: "2025",
    description:
      "Galerie de produits responsive : grille fluide, fiches produits soignées, filtres par catégorie et mise en page éditoriale pensée pour valoriser chaque pièce.",
    longDescription:
      "Galerie produits responsive pensée comme un showcase : grille fluide, fiches détaillées, filtres par catégorie et mise en page éditoriale pour mettre en valeur chaque pièce.",
    highlights: [
      "Grille fluide et responsive",
      "Filtres par catégorie",
      "Fiches produits soignées et lisibles",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    href: "https://galerie-produits-nwq8.vercel.app/",
    repo: GITHUB_PROFILE,
    cover: galerieCover,
    categories: ["Front-end", "UI"],
  },
  {
    n: "08",
    title: "Écritures Fiwa",
    type: "Application mobile · Quiz & École biblique",
    year: "2026",
    description:
      "Application gamifiée d'étude biblique : XP, séries quotidiennes, niveaux, quiz par catégories et École biblique en modules.",
    longDescription:
      "Écritures Fiwa (Maître des Écritures) transforme l'étude de la Bible en une expérience gamifiée. Le tableau de bord affiche l'XP total, la série de jours consécutifs et la progression de niveau. Les quiz sont organisés par catégories (Ancien Testament, Nouveau Testament, Prophètes, Rois…) avec déblocage progressif, et l'École biblique propose quatre modules de leçons illustrées avec suivi de complétion. L'identité visuelle vert profond et or donne une ambiance sobre et inspirante, avec un verset du jour et un mode multilingue.",
    highlights: [
      "Système de gamification : XP, séries quotidiennes et niveaux progressifs",
      "Quiz biblique par catégories avec déblocage niveau par niveau",
      "École biblique : 4 modules de leçons illustrées avec suivi 10/10",
      "Verset du jour, partage biblique et sélecteur de langue",
    ],
    stack: ["React Native", "JavaScript"],
    href: "https://ecritures-fiwa.vercel.app/",
    repo: GITHUB_PROFILE,
    cover: fiwaHome,
    gallery: [{ src: fiwaHome }, { src: maitreCover }, { src: maitreDetail1 }],
    categories: ["Front-end", "UI"],
  },
  {
    n: "09",
    title: "ETP Formation",
    type: "Formulaire d'inscription · Back-office",
    year: "2026",
    description:
      "Fiche d'inscription d'élèves en ligne pour ETP Formation, avec espace back-office dédié à la gestion des inscriptions.",
    longDescription:
      "Plateforme d'inscription pour ETP Formation Encadrement : les parents renseignent une fiche d'inscription d'élève complète (historique, informations du parent/tuteur), tandis qu'un espace back-office sécurisé permet à l'administration de suivre les nouvelles fiches, les inscriptions en attente de confirmation, les inscriptions validées et le nombre total d'élèves inscrits en temps réel.",
    highlights: [
      "Fiche d'inscription d'élève complète et guidée",
      "Espace back-office avec authentification administrateur",
      "Tableau de bord : nouvelles fiches, en attente, validées, élèves inscrits",
      "Suivi des inscriptions en temps réel",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://formulaire-etp-formation.pages.dev/",
    repo: GITHUB_PROFILE,
    cover: etpCover,
    gallery: [{ src: etpCover }, { src: etpDetail1 }, { src: etpDetail2 }],
    categories: ["Front-end", "Outils"],
  },
];

const FILTERS: Array<"Tous" | Category> = ["Tous", "Front-end", "UI", "Outils"];

function ProjectsPage() {
  const [active, setActive] = useState<"Tous" | Category>("Tous");
  const [openId, setOpenId] = useState<string | null>(null);
  const visible =
    active === "Tous" ? projects : projects.filter((p) => p.categories.includes(active));
  const open = openId ? (projects.find((p) => p.n === openId) ?? null) : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <SiteFrame chapter="Chapitre II" section="Projets">
      <section className="relative bg-[#071510] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12">
        {/* ambient soft gold glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full blur-[140px] opacity-[0.22]"
          style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full blur-[140px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 65%)" }}
        />

        <div className="relative mx-auto w-full max-w-[1400px]">
          {/* ============ Header ============ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.4em] uppercase text-[#22c55e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] shadow-[0_0_10px_#22c55e]" />
                Selected Work · {visible.length}/{projects.length}
              </div>
              <h1 className="mt-5 font-['Playfair_Display'] font-light leading-[1.02] tracking-tight text-white text-[clamp(2.4rem,5.5vw,4.25rem)]">
                Mes{" "}
                <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
                  projets
                </span>
                .
              </h1>
              <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-white/65 font-['Outfit']">
                Une sélection de réalisations front-end — interfaces nettes, code maîtrisé,
                expérience fluide sur tous les écrans.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const isActive = active === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActive(f)}
                    className={[
                      "px-4 py-2 text-[12px] font-medium tracking-wide rounded-full border transition-all duration-300 font-['Outfit']",
                      isActive
                        ? "bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] text-[#071510] border-[#22c55e] shadow-[0_10px_30px_-10px_rgba(34, 197, 94,0.75)]"
                        : "text-white/75 border-[#22c55e]/25 bg-white/[0.03] hover:border-[#22c55e] hover:text-[#22c55e] hover:bg-[#22c55e]/[0.06]",
                    ].join(" ")}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* divider */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#22c55e]/35 to-transparent" />

          {/* ============ Grid ============ */}
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p, i) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.2, 0.8, 0.2, 1],
                  delay: Math.min(i, 6) * 0.08,
                }}
                className="group h-full"
              >
                <ProjectCardBody p={p} onOpen={() => setOpenId(p.n)} />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {open ? <ProjectModal project={open} onClose={() => setOpenId(null)} /> : null}
    </SiteFrame>
  );
}

function ProjectCardBody({ p, onOpen }: { p: Project; onOpen?: () => void }) {
  return (
    <article
      className="relative h-full flex flex-col rounded-[20px] p-5 border border-[#22c55e]/20 transition-all duration-500 ease-out
                 bg-[linear-gradient(180deg,#15110a_0%,#0d0a05_100%)]
                 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]
                 group-hover:-translate-y-1.5 group-hover:border-[#22c55e]/70
                 group-hover:shadow-[0_24px_60px_-18px_rgba(34, 197, 94,0.45),0_18px_40px_-20px_rgba(0,0,0,0.8)]"
    >
      {/* soft gold halo on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 50% -20%, rgba(34, 197, 94,0.16), transparent 60%)",
        }}
      />

      {/* ===== Image 16:9 ===== */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[14px] border border-[#22c55e]/25 bg-[#071510] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.75)]">
        <img
          src={p.cover}
          alt={`Aperçu du projet ${p.title}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-90" />

        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#22c55e]/35 text-[10px] tracking-[0.22em] uppercase text-white font-['Outfit']">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
          {p.year}
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#22c55e]/35 text-[10px] tracking-[0.25em] uppercase text-[#22c55e] font-semibold font-['Outfit']">
          {p.n}
        </span>
      </div>

      {/* ===== Content ===== */}
      <div className="relative flex flex-col flex-1 pt-6">
        <p className="text-[10.5px] tracking-[0.32em] uppercase text-[#22c55e] font-['Outfit']">
          {p.type}
        </p>
        <h3 className="mt-2 font-['Playfair_Display'] text-[1.55rem] sm:text-[1.7rem] leading-[1.1] tracking-tight text-white transition-colors duration-300 group-hover:text-[#22c55e]">
          {p.title}
        </h3>
        <p className="mt-3 text-[14.5px] leading-[1.65] text-white/70 font-['Outfit'] flex-1">
          {p.description}
        </p>

        {/* Badges techno */}
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <li
              key={s}
              className="px-2.5 py-1 text-[11px] font-medium tracking-wide text-white border border-[#22c55e]/25 bg-[#22c55e]/[0.06] rounded-full font-['Outfit'] transition-colors duration-300 group-hover:border-[#22c55e]/60 group-hover:text-[#22c55e]"
            >
              {s}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-5 border-t border-[#22c55e]/15">
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-lux inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[linear-gradient(135deg,#22c55e_0%,#22c55e_55%,#22c55e_100%)] text-[#071510] text-[12px] font-semibold tracking-wide font-['Outfit'] shadow-[0_10px_24px_-8px_rgba(34, 197, 94,0.75)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#fde08a_0%,#22c55e_55%,#22c55e_100%)] hover:shadow-[0_16px_36px_-8px_rgba(34, 197, 94,0.9)] hover:-translate-y-0.5"
          >
            Voir le projet
            <span aria-hidden>↗</span>
          </a>
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-lux-outline group/btn inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#22c55e]/50 text-[#22c55e] text-[12px] font-medium font-['Outfit'] bg-transparent transition-all duration-300 hover:border-[#22c55e] hover:bg-[#22c55e]/[0.10] hover:text-[#22c55e] hover:shadow-[0_10px_24px_-12px_rgba(34, 197, 94,0.6)] hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.4-5.25 5.69.41.35.78 1.05.78 2.12v3.15c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            Code GitHub
          </a>
          <button
            type="button"
            onClick={onOpen}
            className="ml-auto inline-flex items-center gap-1.5 px-3 py-2.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-white/70 hover:text-[#22c55e] transition-colors font-['Outfit']"
            aria-label={`Voir les détails du projet ${p.title}`}
          >
            Détails →
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [
          { src: project.cover, position: "center" },
          { src: project.cover, position: "top" },
          { src: project.cover, position: "bottom" },
        ];
  const [activeImg, setActiveImg] = useState(0);
  const current = gallery[activeImg];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Détails du projet ${project.title}`}
      className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6"
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in"
      />

      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-gradient-to-b from-[#141008] via-[#071510] to-[#071510] border border-[#22c55e]/30 rounded-sm shadow-[0_80px_160px_-40px_rgba(34, 197, 94,0.25)]">
        <span
          aria-hidden
          className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-t border-l border-[#22c55e]/70"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-3 right-3 h-4 w-4 border-t border-r border-[#22c55e]/70"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[#22c55e]/70"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#22c55e]/70"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
          className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#22c55e]/50 bg-[#071510]/90 text-[#22c55e] backdrop-blur shadow-md transition hover:bg-[#22c55e] hover:text-[#071510]"
        >
          ✕
        </button>

        <div className="p-5 sm:p-10 lg:p-14">
          {/* Header */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#22c55e]/80">
            <span className="font-display italic text-[#22c55e] text-base">{project.n}</span>
            <span className="h-px w-8 bg-[#22c55e]/40" />
            <span>{project.type}</span>
            <span className="h-px w-8 bg-[#22c55e]/40 hidden sm:block" />
            <span className="hidden sm:inline">{project.year}</span>
          </div>

          <h2 className="mt-5 font-display font-light text-[clamp(2rem,5vw,3.5rem)] leading-[1] tracking-tight text-[#ffffff]">
            {project.title}
          </h2>

          {/* Hero image — passe-partout doré */}
          <div className="relative mt-8 p-2 sm:p-3 bg-gradient-to-br from-[#1a1408] via-[#071510] to-[#1a1408] border border-[#22c55e]/30 rounded-sm shadow-[0_40px_80px_-20px_rgba(34, 197, 94,0.25)]">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#071510] ring-1 ring-[#22c55e]/40">
              <img
                src={current.src}
                alt={`${project.title} — visuel ${activeImg + 1}`}
                className={[
                  "absolute inset-0 h-full w-full transition-all duration-[900ms] ease-out",
                  current.fit === "contain" ? "object-contain bg-white" : "object-cover",
                ].join(" ")}
                style={{ objectPosition: current.position ?? "center" }}
              />
              {/* lumière douce */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(34, 197, 94,0.12),transparent_60%)]" />
              {/* coins ornés */}
              <span
                aria-hidden
                className="pointer-events-none absolute top-2 left-2 h-5 w-5 border-t-2 border-l-2 border-[#22c55e]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute top-2 right-2 h-5 w-5 border-t-2 border-r-2 border-[#22c55e]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b-2 border-l-2 border-[#22c55e]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b-2 border-r-2 border-[#22c55e]"
              />
              {/* badge année */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur border border-[#22c55e]/50 text-[10px] tracking-[0.35em] uppercase text-[#ffffff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                {project.year} · {project.type}
              </div>
              {/* compteur */}
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur border border-[#22c55e]/40 text-[10px] tracking-[0.35em] uppercase text-[#22c55e]">
                {String(activeImg + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
            {gallery.map((g, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImg(i)}
                className={[
                  "group relative aspect-[4/3] overflow-hidden rounded-sm transition-all duration-300",
                  i === activeImg
                    ? "ring-2 ring-[#22c55e] shadow-[0_12px_30px_-10px_rgba(34, 197, 94,0.5)] scale-[1.02]"
                    : "ring-1 ring-[#22c55e]/20 hover:ring-[#22c55e]/70 hover:scale-[1.02]",
                ].join(" ")}
                aria-label={`Voir le visuel ${i + 1}`}
              >
                <img
                  src={g.src}
                  alt=""
                  className={[
                    "absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105",
                    g.fit === "contain" ? "object-contain bg-white" : "object-cover",
                  ].join(" ")}
                  style={{ objectPosition: g.position ?? "center" }}
                />
                <span
                  aria-hidden
                  className={[
                    "absolute inset-0 transition-opacity",
                    i === activeImg ? "bg-transparent" : "bg-black/40 group-hover:bg-black/15",
                  ].join(" ")}
                />
                <span className="absolute bottom-1.5 left-1.5 text-[9px] tracking-[0.3em] uppercase text-[#ffffff]/90 bg-black/60 px-1.5 py-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#22c55e]/80">À propos</p>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-[#ffffff]/80">
                {project.longDescription}
              </p>

              <p className="mt-10 text-[11px] tracking-[0.4em] uppercase text-[#22c55e]/80">
                Points clés
              </p>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] leading-[1.65] text-[#ffffff]/75">
                    <span aria-hidden className="mt-2 h-px w-5 flex-shrink-0 bg-[#22c55e]/70" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="md:col-span-5 md:pl-10 md:border-l border-[#22c55e]/15">
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#22c55e]/80">Stack</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 text-[10px] tracking-[0.32em] uppercase text-[#ffffff]/80 border border-[#22c55e]/30 bg-[#22c55e]/[0.05] rounded-[1px]"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[11px] tracking-[0.4em] uppercase text-[#22c55e]/80">
                Catégories
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.categories.map((c) => (
                  <li
                    key={c}
                    className="px-3 py-1.5 text-[10px] tracking-[0.32em] uppercase text-[#22c55e] border border-[#22c55e]/40 rounded-[1px]"
                  >
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lux group inline-flex items-center justify-between gap-3 px-5 py-4 bg-[#22c55e] text-[#071510] border border-[#22c55e] rounded-[1px] shadow-[0_10px_30px_-10px_rgba(34, 197, 94,0.7)] transition hover:bg-[#22c55e]"
                >
                  <span className="text-[11px] tracking-[0.4em] uppercase font-semibold">
                    Visiter le site
                  </span>
                  <span aria-hidden className="text-lg">
                    ↗
                  </span>
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lux group inline-flex items-center justify-between gap-3 px-5 py-4 bg-transparent text-[#ffffff] border border-[#22c55e]/40 rounded-[1px] transition hover:border-[#22c55e] hover:text-[#22c55e]"
                >
                  <span className="text-[11px] tracking-[0.4em] uppercase">
                    Voir le repo GitHub
                  </span>
                  <span aria-hidden className="text-lg">
                    →
                  </span>
                </a>
              </div>

              <p className="mt-6 text-[10px] tracking-[0.3em] uppercase text-[#ffffff]/40">
                Échap pour fermer
              </p>
            </aside>
          </div>

          {project.internal ? (
            <div className="mt-10 border-t border-[#22c55e]/15 pt-6">
              <Link
                to={project.href}
                className="text-[11px] tracking-[0.4em] uppercase text-[#22c55e] hover:text-[#22c55e]"
              >
                → Lire l'étude de cas complète
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
