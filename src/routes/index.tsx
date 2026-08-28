import { createFileRoute, Link } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";
import kingdevCover from "@/assets/project-kingdev.jpg";
import mahanaimCover from "@/assets/project-mahanaim.jpg";
import maitreCover from "@/assets/project-maitre.jpg";
import todoCover from "@/assets/project-todo.jpg";
import estherCover from "@/assets/project-esther.jpg";
import lovableCover from "@/assets/project-lovable.jpg";
import galerieCover from "@/assets/project-galerie.jpg";
import fiwaHome from "@/assets/fiwa-home.jpg";
import etpCover from "@/assets/project-etp.jpg";
import diplomePdfUrl from "@/assets/diplome-gomycode.pdf?url";
import testimonialDavid from "@/assets/testimonial-david.jpg";
import clientZoeCanaan from "@/assets/client-zoecanaan.jpg";
import clientEtp from "@/assets/client-etp.jpg";
import { SiteFrame } from "@/components/SiteFrame";
import { motion } from "framer-motion";
import { BadgeCheck, CalendarDays, Code2, Rocket, User, Users } from "lucide-react";

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sagne Ake Pierre Constant — Front-End Web Developer" },
      {
        name: "description",
        content:
          "Portfolio de Sagne Ake Pierre Constant (ElijahCodex), développeur web front-end. Or, noir, typographie éditoriale et interfaces premium.",
      },
      { property: "og:title", content: "Sagne Ake Pierre Constant — Front-End Web Developer" },
      {
        property: "og:description",
        content: "Portfolio premium — développeur front-end. Or & noir, typographie soignée.",
      },
    ],
  }),
  component: Portfolio,
});

const guestbook = [
  {
    n: "I",
    title: "Le pixel comme matière",
    body: "Un bouton, une marge, un dégradé : tout est composition. Je dessine d'abord avec du HTML et du CSS, comme on tracerait les lignes d'une page avant d'y poser l'encre.",
  },
  {
    n: "II",
    title: "JavaScript, la voix du produit",
    body: "Une interface ne vit qu'à travers ses interactions. J'écris du JavaScript clair, modulaire et accessible — pour que chaque clic, chaque transition raconte quelque chose.",
  },
  {
    n: "III",
    title: "Bootstrap & frameworks",
    body: "Bootstrap, Tailwind, React : des outils que je choisis selon le projet. Toujours au service du design, jamais l'inverse. La rapidité d'exécution sans renoncer au caractère.",
  },
  {
    n: "IV",
    title: "Le visiteur d'abord",
    body: "Mobile, tablette, ordinateur — la même page, trois lectures différentes. Je conçois pour l'humain qui ouvre la page, pas pour la machine qui l'affiche.",
  },
];

const homeProjects = [
  {
    n: "01",
    title: "KingDev Shopping",
    type: "E-commerce · CI",
    cover: kingdevCover,
    href: "https://kingdevshopping.ci",
    internal: false,
  },
  {
    n: "02",
    title: "Mahanaim Luxury",
    type: "Vitrine premium",
    cover: mahanaimCover,
    href: "https://mahanaim-shop-lux.lovable.app/",
    internal: false,
  },
  {
    n: "03",
    title: "Maître des Écritures",
    type: "App · Étude biblique",
    cover: maitreCover,
    href: "https://maitres-des-ecritures.vercel.app/",
    internal: false,
  },
  {
    n: "04",
    title: "Application TODO",
    type: "App productivité",
    cover: todoCover,
    href: "https://app-todo-9sez.vercel.app/",
    internal: false,
  },
  {
    n: "05",
    title: "Esther Transfert",
    type: "Fintech · Transfert",
    cover: estherCover,
    href: "https://esther-transfert.vercel.app/",
    internal: false,
  },
  {
    n: "06",
    title: "Maison Intègre",
    type: "Refonte UI",
    cover: lovableCover,
    href: "https://pixel-perfection-project-35.lovable.app/",
    internal: false,
  },
  {
    n: "07",
    title: "Galerie Produits",
    type: "Vitrine produits",
    cover: galerieCover,
    href: "/projects/galerie-produits",
    internal: true,
  },
  {
    n: "09",
    title: "Écritures Fiwa",
    type: "App mobile · React Native",
    cover: fiwaHome,
    href: "https://ecritures-fiwa.vercel.app/",
    internal: false,
  },
  {
    n: "10",
    title: "ETP Formation",
    type: "Formulaire d'inscription · Back-office",
    cover: etpCover,
    href: "https://formulaire-etp-formation.pages.dev/",
    internal: false,
  },
];

function Portfolio() {
  return (
    <SiteFrame chapter="Couverture" section="Le Livre d'Or" pageNumber="001">
      {/* ============ Hero ============ */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Photo card */}
        <div className="relative max-w-md mx-auto lg:mx-0 w-full">
          <div
            className="relative rounded-3xl overflow-hidden border border-[#22c55e]/40 bg-white aspect-[4/5]"
            style={{
              boxShadow:
                "0 40px 100px -30px rgba(34, 197, 94,0.45), 0 0 0 1px rgba(34, 197, 94,0.2)",
            }}
          >
            <img
              src={profile}
              alt="Sagne Ake Pierre Constant"
              className="w-full h-full object-cover object-top"
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow:
                  "inset 0 0 100px rgba(34, 197, 94,0.15), inset 0 -60px 100px rgba(0,0,0,0.4)",
              }}
            />
          </div>
          <div className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full bg-[#071510] border border-[#22c55e]/50 px-4 py-2 shadow-lg">
            <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/90">
              Disponible pour projets
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#d4af37] mb-5">
            <Code2 className="h-4 w-4" />
            Développeur Front-End
            <span className="h-px w-10 bg-[#d4af37]/50" />
          </div>
          <h1 className="font-sans font-bold leading-[1.05] text-[clamp(2.25rem,5.5vw,4rem)] tracking-tight">
            <span className="text-white">Sagne Ake</span>
            <br />
            <span className="text-[#22c55e]">Pierre Constant</span>
          </h1>
          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-white/70 max-w-lg">
            Je conçois et développe des interfaces web modernes, performantes et intuitives.
            Passionné par le code propre et le design élégant.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group btn-lux inline-flex items-center gap-2 rounded-full bg-[#22c55e] text-[#071510] px-6 py-3 text-[12px] tracking-[0.15em] uppercase font-semibold hover:bg-[#22c55e] transition"
            >
              Découvrir mes projets
              <span aria-hidden className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: CalendarDays, value: "5+", label: "Ans d'expérience" },
              { icon: Rocket, value: "9", label: "Projets réalisés" },
              { icon: Users, value: "7+", label: "Clients satisfaits" },
              { icon: BadgeCheck, value: "100%", label: "Engagé" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[#22c55e]/20 bg-[#0e2118]/60 px-4 py-5 text-center"
              >
                <s.icon className="h-5 w-5 mx-auto text-[#d4af37]" />
                <div className="mt-2 font-display text-2xl text-[#22c55e]">{s.value}</div>
                <div className="mt-1 text-[9px] tracking-[0.15em] uppercase text-white/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ À propos de moi — aperçu ============ */}
      <motion.section
        {...revealProps}
        className="mt-10 sm:mt-14 rounded-2xl border border-[#22c55e]/20 bg-[#0e2118]/40 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
      >
        <div className="shrink-0 h-16 w-16 rounded-full border border-[#d4af37]/50 flex items-center justify-center bg-[#071510]">
          <User className="h-7 w-7 text-[#d4af37]" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#22c55e] mb-2">
            À propos de moi
          </p>
          <h2 className="font-display text-xl sm:text-2xl text-white">
            Passionné par le code, déterminé par{" "}
            <span className="text-[#22c55e] italic">l'excellence.</span>
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-2xl">
            Développeur front-end spécialisé dans la création d'expériences web élégantes et
            performantes. J'allie design moderne et code propre pour donner vie à vos idées.
          </p>
        </div>
        <Link
          to="/about"
          className="link-lux shrink-0 text-[11px] tracking-[0.25em] uppercase text-[#d4af37] hover:text-[#22c55e] transition"
        >
          En savoir plus →
        </Link>
      </motion.section>

      {/* ============ Stack — logos techno ============ */}
      <motion.section
        {...revealProps}
        className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]"
      >
        <div className="px-6 sm:px-12 md:px-20 pt-12 pb-8 border-b border-[#22c55e]/15">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
            ◆ Stack technique
          </p>
          <h2 className="mt-4 font-display font-light leading-[0.95] text-[clamp(1.75rem,4vw,3rem)] tracking-tight text-[#ffffff]">
            Les outils que{" "}
            <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
              je manie
            </span>{" "}
            au quotidien.
          </h2>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-[#22c55e]/15">
          {[
            {
              name: "HTML5",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS3",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "JavaScript",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "React",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Node.js",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Git",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
              name: "GitHub",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              invert: true,
            },
            {
              name: "Vercel",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
              invert: true,
            },
            {
              name: "Firebase",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            },
            { name: "Lovable", src: "https://lovable.dev/favicon.ico" },
            {
              name: "Claude",
              src: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23D97757'/%3E%3Ctext x='50' y='68' font-size='45' font-family='Georgia,serif' font-weight='600' fill='white' text-anchor='middle'%3EC%3C/text%3E%3C/svg%3E",
            },
            {
              name: "Blackbox AI",
              src: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='16' fill='%230a0a0a' stroke='%23d4af37' stroke-width='3'/%3E%3Ctext x='50' y='68' font-size='42' font-family='Georgia,serif' font-weight='600' fill='%23d4af37' text-anchor='middle'%3EB%3C/text%3E%3C/svg%3E",
            },
            {
              name: "Flutter",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            },
          ].map((t) => (
            <li
              key={t.name}
              className="bg-[#071510] p-6 sm:p-8 flex flex-col items-center justify-center gap-3 group hover:bg-[#0e2118] transition"
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
                <img
                  src={t.src}
                  alt={t.name}
                  loading="lazy"
                  className={`max-h-full max-w-full object-contain transition duration-500 group-hover:scale-110 ${t.invert ? "invert" : ""}`}
                />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#ffffff]/70 group-hover:text-[#22c55e] transition">
                {t.name}
              </span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* ============ À propos — bio condensée ============ */}
      <motion.section
        {...revealProps}
        className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Marginalia */}
          <aside className="lg:col-span-4 p-8 sm:p-12 md:p-14 border-b lg:border-b-0 lg:border-r border-[#22c55e]/15 bg-gradient-to-br from-[#071510] via-[#0d0d0d] to-[#071510]">
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">◆ À propos</p>
            <h2 className="mt-6 font-display font-light leading-[0.95] text-[clamp(2rem,4.5vw,3.25rem)] tracking-tight text-[#ffffff]">
              L'auteur,
              <br />
              <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
                en quelques lignes.
              </span>
            </h2>
            <div className="mt-8 h-px bg-gradient-to-r from-[#22c55e]/50 via-[#22c55e]/20 to-transparent" />
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/70">
                  Métier
                </dt>
                <dd className="mt-1 font-display text-lg text-[#ffffff]">
                  Développeur Web Front-End
                </dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/70">
                  Basé à
                </dt>
                <dd className="mt-1 font-display text-lg text-[#ffffff]">Abidjan, Côte d'Ivoire</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/70">
                  Outils
                </dt>
                <dd className="mt-1 font-display italic text-base text-[#22c55e]">
                  HTML · CSS · JavaScript · Bootstrap · React
                </dd>
              </div>
            </dl>
          </aside>

          {/* Bio body */}
          <div className="lg:col-span-8 p-8 sm:p-12 md:p-16">
            <p className="text-[10px] tracking-[0.45em] uppercase text-[#ffffff]/50">
              Préface — Page 02½
            </p>

            <p className="mt-6 font-display text-2xl sm:text-3xl leading-[1.35] text-[#ffffff]">
              <span className="font-display italic text-5xl text-[#22c55e] float-left leading-[0.85] mr-3 mt-1">
                J
              </span>
              e m'appelle <span className="italic text-[#22c55e]">Sagne Ake Pierre Constant</span>,
              alias <span className="italic">ElijahCodex</span> — développeur web front-end basé à
              Abidjan. Je conçois des interfaces nettes, accessibles et fidèles à l'intention
              initiale du design.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-[15px] leading-relaxed text-[#ffffff]/75">
              <p>
                Mon parcours commence dans la curiosité du{" "}
                <em className="text-[#22c55e] not-italic font-medium">HTML</em> et du{" "}
                <em className="text-[#22c55e] not-italic font-medium">CSS</em>, puis se structure
                autour du <em className="text-[#22c55e] not-italic font-medium">JavaScript</em> et
                de frameworks comme{" "}
                <em className="text-[#22c55e] not-italic font-medium">Bootstrap</em> et{" "}
                <em className="text-[#22c55e] not-italic font-medium">React</em>. Aujourd'hui, je
                livre des sites e-commerce, des vitrines premium et des applications web sur mesure.
              </p>
              <p>
                Ma philosophie tient en une phrase : un bon front-end est invisible. Il laisse
                parler le contenu, respecte le visiteur, et fonctionne aussi bien sur un téléphone
                d'entrée de gamme que sur un grand écran. Je soigne la typographie, l'accessibilité
                et la performance — pas par principe, mais parce que c'est ce qui se voit en
                premier.
              </p>
            </div>

            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#22c55e]/40 to-transparent" />

            <ol className="mt-8 space-y-4">
              {[
                { y: "2018", t: "Premières lignes de HTML / CSS — apprentissage en autodidacte." },
                {
                  y: "2021",
                  t: "Maîtrise de JavaScript & Bootstrap, premiers sites livrés en production.",
                },
                {
                  y: "2024",
                  t: "Design & motion : Photoshop, Photopea, Première Pro, After Effects.",
                },
                {
                  y: "2025",
                  t: "E-commerce & vitrines premium : KingDev Shopping, Mahanaim Luxury.",
                },
                {
                  y: "2026 – 2027",
                  t: "Formation développement web à GoMyCode — spécialisation front-end avancée.",
                },
              ].map((step) => (
                <li key={step.y} className="grid grid-cols-[auto_1fr] gap-5 items-baseline">
                  <span className="font-display italic text-lg text-[#22c55e] tabular-nums whitespace-nowrap">
                    {step.y}
                  </span>
                  <span className="text-[15px] leading-relaxed text-[#ffffff]/80 border-l border-[#22c55e]/25 pl-5">
                    {step.t}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="btn-lux-outline inline-flex items-center gap-3 border border-[#22c55e]/60 text-[#ffffff] px-6 py-3 text-[11px] tracking-[0.3em] uppercase hover:border-[#22c55e] hover:text-[#22c55e] transition"
              >
                Lire la suite
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="btn-lux inline-flex items-center gap-3 bg-[#22c55e] text-[#071510] px-6 py-3 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#22c55e] transition"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============ Compétences créatives — tags ============ */}
      <motion.section
        {...revealProps}
        className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]"
      >
        <div className="px-6 sm:px-12 md:px-20 pt-12 sm:pt-16 pb-10 border-b border-[#22c55e]/15">
          <div className="flex items-baseline justify-between">
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
              ◆ Compétences créatives
            </p>
            <span className="hidden sm:inline text-[10px] tracking-[0.35em] uppercase text-[#ffffff]/45">
              Design · Motion · Vidéo
            </span>
          </div>
          <h2 className="mt-6 font-display font-light leading-[0.95] text-[clamp(2rem,5vw,3.75rem)] tracking-tight max-w-3xl text-[#ffffff]">
            Au-delà du code,
            <br />
            <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
              l'image &amp; le mouvement.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#ffffff]/70">
            Une double culture : développement web et création visuelle. Je conçois aussi les
            supports graphiques et vidéos qui prolongent l'identité d'un projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {[
            {
              title: "Design & Infographie",
              caption: "Image fixe",
              tags: ["Photoshop", "Photopea", "Infographie"],
            },
            {
              title: "Motion & Vidéo",
              caption: "Image en mouvement",
              tags: ["Adobe Première Pro", "After Effects", "Montage vidéo"],
            },
          ].map((group, i) => (
            <div
              key={group.title}
              className={[
                "p-8 sm:p-12 border-b border-[#22c55e]/15",
                i === 0 ? "md:border-r md:border-b-0" : "md:border-b-0",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl sm:text-3xl text-[#ffffff] leading-tight">
                  {group.title}
                </h3>
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/70 whitespace-nowrap ml-4">
                  {group.caption}
                </span>
              </div>
              <div className="mt-6 h-px bg-gradient-to-r from-[#22c55e]/50 via-[#22c55e]/15 to-transparent" />
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {group.tags.map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[#22c55e]/35 text-[#ffffff] text-[11px] tracking-[0.25em] uppercase rounded-full bg-[#071510]/60 hover:border-[#22c55e] hover:text-[#22c55e] hover:bg-[#0e2118] transition"
                  >
                    <span aria-hidden className="text-[#22c55e]">
                      ◆
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ============ Diplôme — certification ============ */}
      <motion.section
        {...revealProps}
        className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]"
      >
        <div className="p-6 sm:p-10 lg:p-14">
          <div className="flex items-center justify-between text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/70">
            <span>Diplôme</span>
            <span>Certification</span>
          </div>

          <h2 className="mt-6 font-display text-[clamp(1.6rem,4vw,2.6rem)] leading-tight text-[#ffffff]">
            Certificat{" "}
            <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
              GoMyCode
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-[#ffffff]/70">
            Introduction to Web Development with AI Skills — délivré à Ake Pierre Constant Sagne,
            diplômé le 01 juillet 2026.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-[#141008] to-[#071510] border border-[#22c55e]/30">
              <Corner className="top-2 left-2" />
              <Corner className="top-2 right-2 rotate-90" />
              <Corner className="bottom-2 left-2 -rotate-90" />
              <Corner className="bottom-2 right-2 rotate-180" />
              <a
                href={diplomePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="block group relative"
                aria-label="Ouvrir le certificat GoMyCode en plein écran"
              >
                <object
                  data={diplomePdfUrl}
                  type="application/pdf"
                  className="w-full h-[420px] sm:h-[520px] ring-1 ring-[#22c55e]/25 pointer-events-none bg-white"
                >
                  <div className="w-full h-[420px] sm:h-[520px] flex items-center justify-center bg-white text-[#071510] text-sm">
                    Aperçu PDF indisponible — cliquez pour ouvrir le certificat.
                  </div>
                </object>
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#22c55e]/5 transition" />
              </a>
            </div>

            <div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                {[
                  { label: "Établissement", value: "GoMyCode" },
                  { label: "Programme", value: "Web Development with AI Skills" },
                  { label: "Obtenu le", value: "01 juillet 2026" },
                  { label: "Agrément", value: "Centre agréé n° 11-1940-2" },
                ].map((d) => (
                  <div key={d.label} className="border-l border-[#22c55e]/30 pl-4">
                    <dt className="text-[10px] tracking-[0.3em] uppercase text-[#22c55e]/70">
                      {d.label}
                    </dt>
                    <dd className="mt-1 font-display text-base text-[#ffffff]">{d.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={diplomePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 btn-lux inline-flex items-center gap-3 bg-[#22c55e] text-[#071510] px-6 py-3 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#22c55e] transition"
              >
                Voir le diplôme (PDF)
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============ Projets — aperçu visuel ============ */}
      <motion.section
        {...revealProps}
        className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]"
      >
        <div className="px-6 sm:px-12 md:px-20 pt-12 sm:pt-16 pb-10 border-b border-[#22c55e]/15">
          <div className="flex items-baseline justify-between">
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
              ◆ Projets · Aperçu
            </p>
            <span className="hidden sm:inline text-[10px] tracking-[0.35em] uppercase text-[#ffffff]/45">
              {homeProjects.length} pièces
            </span>
          </div>
          <h2 className="mt-6 font-display font-light leading-[0.95] text-[clamp(2rem,5vw,3.75rem)] tracking-tight max-w-3xl text-[#ffffff]">
            Quelques{" "}
            <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
              réalisations
            </span>{" "}
            choisies.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#ffffff]/70">
            Sites e-commerce, vitrines premium, applications web et fintech — chaque pièce livrée
            avec une intention claire et une exécution soignée.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {homeProjects.map((p, i) => {
            const card = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#071510]">
                  <img
                    src={p.cover}
                    alt={`Aperçu du projet ${p.title}`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#22c55e]/0 group-hover:ring-[#22c55e]/40 transition-all duration-500" />
                  <div className="absolute top-4 left-4 right-4 flex items-baseline justify-between text-[#ffffff]">
                    <span className="font-display italic text-base text-[#22c55e]">{p.n}</span>
                    <span className="text-[10px] tracking-[0.35em] uppercase">2025</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 transition-colors duration-300 group-hover:bg-[#0e2118]">
                  <h3 className="font-display text-xl sm:text-2xl leading-tight text-[#ffffff] group-hover:text-[#22c55e] transition">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/70">
                    {p.type}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#22c55e]/15 pt-4">
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]">
                      {p.internal ? "Voir le détail" : "Voir le projet"}
                    </span>
                    <span
                      aria-hidden
                      className="font-display text-xl text-[#22c55e] group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </span>
                  </div>
                </div>
              </>
            );
            return (
              <li
                key={p.n}
                className={[
                  "lift-lux group relative border-b border-[#22c55e]/15",
                  (i + 1) % 3 !== 0 ? "lg:border-r" : "",
                  (i + 1) % 2 !== 0 ? "sm:border-r lg:border-r" : "sm:border-r-0",
                ].join(" ")}
              >
                {p.internal ? (
                  <Link
                    to={p.href}
                    className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e]"
                  >
                    {card}
                  </Link>
                ) : (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e]"
                  >
                    {card}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <div className="px-6 sm:px-12 md:px-20 py-10 border-t border-[#22c55e]/15 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#ffffff]/55">
            Catalogue complet sur la page Projets
          </p>
          <Link
            to="/projects"
            className="btn-lux inline-flex items-center gap-3 bg-[#22c55e] text-[#071510] px-6 py-3 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#22c55e] transition shadow-[0_10px_30px_-10px_rgba(34, 197, 94,0.6)]"
          >
            Tous les projets <span aria-hidden>→</span>
          </Link>
        </div>
      </motion.section>

      {/* ============ Témoignage — David Komlan ============ */}
      <motion.section
        {...revealProps}
        className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]"
      >
        <div className="px-6 sm:px-12 md:px-20 pt-12 sm:pt-16 pb-10 border-b border-[#22c55e]/15">
          <div className="flex items-baseline justify-between">
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
              ◆ Paroles de clients
            </p>
            <span className="hidden sm:inline text-[10px] tracking-[0.35em] uppercase text-[#ffffff]/45">
              Témoignage
            </span>
          </div>
          <h2 className="mt-6 font-display font-light leading-[0.95] text-[clamp(2rem,5vw,3.75rem)] tracking-tight max-w-3xl text-[#ffffff]">
            Ce qu'ils en{" "}
            <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
              disent.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Portrait */}
          <div className="md:col-span-5 p-8 sm:p-12 border-b md:border-b-0 md:border-r border-[#22c55e]/15 bg-gradient-to-br from-[#071510] via-[#0d0d0d] to-[#071510] flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-[#22c55e]/50" />
              <div className="absolute -inset-1.5 border border-[#22c55e]/25" />
              <div className="relative w-[240px] sm:w-[300px] aspect-square overflow-hidden bg-white">
                <img
                  src={testimonialDavid}
                  alt="David Komlan, fondateur de KingDev Shopping"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 80px rgba(34, 197, 94,0.18)" }}
                />
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="md:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
            <span className="font-display italic text-[#22c55e] text-6xl leading-none">"</span>
            <div
              className="mt-2 text-lg tracking-[0.2em] text-[#22c55e]"
              aria-label="5 étoiles sur 5"
            >
              ★ ★ ★ ★ ★
            </div>
            <blockquote className="mt-4 font-display italic text-xl sm:text-2xl md:text-[28px] leading-[1.45] text-[#ffffff]">
              Elijah a transformé ma vision de KingDev Shopping en une vraie boutique en ligne,
              élégante et rapide. Son sens du détail, son écoute et sa rigueur sont rares — on sent
              l'amour du travail bien fait dans chaque page. Je le recommande sans hésiter à tout
              entrepreneur qui veut une présence web sérieuse.
            </blockquote>
            <div className="mt-8 h-px bg-gradient-to-r from-[#22c55e]/60 via-[#22c55e]/15 to-transparent" />
            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg text-[#ffffff]">David Komlan</div>
                <div className="mt-1 text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
                  Fondateur · KingDev Shopping
                </div>
              </div>
              <Link
                to="/case-study/kingdev"
                className="btn-lux-outline inline-flex items-center gap-3 border border-[#22c55e]/60 text-[#ffffff] px-5 py-2.5 text-[10px] tracking-[0.3em] uppercase hover:border-[#22c55e] hover:text-[#22c55e] transition"
              >
                Lire l'étude de cas <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mur de témoignages supplémentaires */}
        <div className="border-t border-[#22c55e]/15 px-6 sm:px-12 md:px-20 pt-10 pb-4">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">◆ D'autres voix</p>
          <h3 className="mt-3 font-display font-light text-2xl sm:text-3xl text-[#ffffff]">
            Quelques mots de ceux avec qui j'ai collaboré.
          </h3>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#22c55e]/15 border-t border-[#22c55e]/15">
          {[
            {
              quote:
                "Un travail propre, livré dans les temps. Elijah a su traduire mes idées en une boutique fluide que mes clientes adorent parcourir depuis leur téléphone.",
              name: "Mme Koné Debora",
              role: "Fondatrice · Zoé Canaan Shopping",
              initials: "KD",
            },
            {
              quote:
                "Rigueur, sens du détail et vraie écoute. Notre plateforme de transfert est désormais rapide, claire et inspire confiance dès la page d'accueil.",
              name: "Esther A.",
              role: "Porteuse de projet · Esther Transfert",
              initials: "EA",
            },
            {
              quote:
                "Elijah a structuré notre site de formations avec beaucoup de soin. Les inscriptions ont décollé dès la première semaine de mise en ligne.",
              name: "Direction ETP",
              role: "ETP Formations · Cours de vacances",
              initials: "ET",
            },
            {
              quote:
                "Front-end créatif et solide. L'interface de Maître des Écritures est devenue un vrai outil de travail quotidien, simple et beau à la fois.",
              name: "Pasteur J. K.",
              role: "Utilisateur · Maître des Écritures",
              initials: "JK",
            },
            {
              quote:
                "Bon designer, bon développeur, bon communicateur. Trois qualités rares réunies. Notre galerie produits est exactement ce que nous voulions.",
              name: "Yannick O.",
              role: "Client · Galerie Produits",
              initials: "YO",
            },
            {
              quote:
                "Mahanaim Luxury a enfin la vitrine qu'elle mérite. Élégance, rapidité, attention aux détails — un partenaire de confiance.",
              name: "Équipe Mahanaim",
              role: "Mahanaim Luxury",
              initials: "ML",
            },
          ].map((t) => (
            <li
              key={t.name}
              className="bg-[#071510] p-8 sm:p-10 flex flex-col gap-5 border border-transparent hover:border-[#22c55e]/40 hover:shadow-[0_20px_60px_-20px_rgba(34, 197, 94,0.35)] transition duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="font-display italic text-[#22c55e] text-4xl leading-none">"</span>
                <span
                  className="text-sm tracking-[0.2em] text-[#22c55e]"
                  aria-label="5 étoiles sur 5"
                >
                  ★ ★ ★ ★ ★
                </span>
              </div>
              <p className="font-display italic text-[15px] sm:text-base leading-[1.6] text-[#ffffff]/90">
                {t.quote}
              </p>
              <div className="mt-auto pt-5 border-t border-[#22c55e]/15 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-[#22c55e]/50 flex items-center justify-center text-[11px] tracking-[0.2em] text-[#22c55e] bg-[#071510]">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-base text-[#ffffff]">{t.name}</div>
                  <div className="mt-1 text-[9px] tracking-[0.3em] uppercase text-[#22c55e]/70">
                    {t.role}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* ============ Bandeau clients ============ */}
      <motion.section
        {...revealProps}
        className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden"
      >
        <div className="px-6 sm:px-12 md:px-20 pt-10 pb-8 border-b border-[#22c55e]/15 flex items-baseline justify-between flex-wrap gap-3">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
            ◆ Ils m'ont fait confiance
          </p>
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#ffffff]/45">
            Partenaires &amp; clients
          </span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-3">
          {[
            {
              name: "KingDev Shopping",
              role: "E-commerce — David Komlan",
              img: kingdevCover,
              mono: true,
            },
            {
              name: "Zoé Canaan Shopping",
              role: "Habillement — Mme Koné Debora",
              img: clientZoeCanaan,
              mono: true,
            },
            {
              name: "ETP Formations",
              role: "Éducation — Cours de vacances",
              img: clientEtp,
              mono: true,
            },
          ].map((c, i) => (
            <li
              key={c.name}
              className={[
                "p-8 sm:p-10 border-b border-[#22c55e]/15 flex flex-col items-center justify-center gap-4 text-center",
                i < 2 ? "sm:border-r" : "",
                i === 2 ? "sm:border-b-0" : "",
              ].join(" ")}
            >
              <div className="h-20 sm:h-24 w-full flex items-center justify-center">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className={`max-h-full max-w-[180px] object-contain ${c.mono ? "grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500" : ""}`}
                />
              </div>
              <div>
                <div className="font-display text-lg text-[#ffffff]">{c.name}</div>
                <div className="mt-1 text-[10px] tracking-[0.3em] uppercase text-[#22c55e]/70">
                  {c.role}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* ============ Livre d'Or — manifesto ============ */}
      <motion.section
        {...revealProps}
        className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]"
      >
        <div className="px-6 sm:px-12 md:px-20 pt-12 sm:pt-16 pb-8 border-b border-[#22c55e]/15">
          <div className="flex items-baseline justify-between">
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
              ◆ Le Livre d'Or
            </p>
            <span className="hidden sm:inline text-[10px] tracking-[0.35em] uppercase text-[#ffffff]/45">
              Manifeste — Front-End
            </span>
          </div>
          <h2 className="mt-6 font-display font-light leading-[0.95] text-[clamp(2rem,5vw,3.75rem)] tracking-tight max-w-3xl text-[#ffffff]">
            Quatre{" "}
            <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
              convictions
            </span>{" "}
            qui
            <br />
            guident chaque ligne de code.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#ffffff]/70">
            Être développeur front-end, ce n'est pas seulement empiler des balises. C'est traduire
            une intention en interface — avec rigueur, lisibilité, et un soin maniaque pour le
            détail.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2">
          {guestbook.map((g, i) => (
            <li
              key={g.n}
              className={[
                "p-8 sm:p-12 border-b border-[#22c55e]/15 group hover:bg-[#0e2118] transition",
                i % 2 === 0 ? "md:border-r" : "",
                i >= guestbook.length - 2 ? "md:border-b-0" : "",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display italic text-3xl text-[#22c55e]">{g.n}</span>
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#ffffff]/40">
                  Conviction
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl text-[#ffffff] group-hover:text-[#22c55e] transition leading-tight">
                {g.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#ffffff]/70">{g.body}</p>
            </li>
          ))}
        </ul>

        <div className="px-6 sm:px-12 md:px-20 py-10 sm:py-14 border-t border-[#22c55e]/15 bg-gradient-to-b from-[#071510] to-[#071510]">
          <blockquote className="font-display italic text-xl sm:text-2xl md:text-3xl leading-snug max-w-4xl text-[#ffffff]">
            <span className="text-[#22c55e] text-5xl leading-none align-top mr-2">"</span>
            Le code que j'écris aujourd'hui sera lu demain par un autre développeur, et vécu chaque
            jour par un utilisateur. Je le travaille pour les deux.
          </blockquote>
          <div className="mt-6 text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
            — Sagne Ake Pierre Constant · ElijahCodex
          </div>
        </div>
      </motion.section>
    </SiteFrame>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`absolute w-6 h-6 text-[#22c55e]/70 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M2 10V2h8" />
      <path d="M5 5l3 3" />
    </svg>
  );
}
