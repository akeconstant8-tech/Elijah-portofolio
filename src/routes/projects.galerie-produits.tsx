import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/SiteFrame";
import cover from "@/assets/project-galerie.jpg";
import shot1 from "@/assets/galerie-detail-1.jpg";
import shot2 from "@/assets/galerie-detail-2.jpg";

export const Route = createFileRoute("/projects/galerie-produits")({
  head: () => ({
    meta: [
      { title: "Galerie Produits — Sagne Ake Pierre Constant" },
      {
        name: "description",
        content:
          "Étude de cas : Galerie Produits — vitrine responsive avec grille fluide, fiches produits soignées et filtres par catégorie.",
      },
      { property: "og:title", content: "Galerie Produits — Étude de cas" },
      {
        property: "og:description",
        content: "Vitrine produits responsive, grille fluide, fiches soignées.",
      },
      { property: "og:image", content: cover },
    ],
  }),
  component: GalerieProduitsPage,
});

const stack = ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"];
const features = [
  {
    title: "Grille fluide",
    desc: "Mise en page responsive en 1, 2, 3 ou 4 colonnes selon la largeur de l'écran.",
  },
  {
    title: "Fiches produits",
    desc: "Cartes au design éditorial : image, titre, prix, badges et appel à l'action clair.",
  },
  {
    title: "Filtres dynamiques",
    desc: "Filtrage par catégorie en JavaScript pur, sans rechargement de page.",
  },
  {
    title: "Accessibilité",
    desc: "Contrastes maîtrisés, navigation clavier, attributs ARIA sur les éléments interactifs.",
  },
  {
    title: "Performance",
    desc: "Images optimisées et chargement différé pour un rendu instantané sur mobile.",
  },
  {
    title: "Mobile first",
    desc: "Conçue d'abord pour le smartphone, étendue ensuite vers tablette et desktop.",
  },
];

function GalerieProduitsPage() {
  return (
    <SiteFrame chapter="Chapitre II · Étude de cas" section="Galerie Produits">
      <article className="bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#22c55e]/15">
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-[#071510] overflow-hidden">
            <img
              src={cover}
              alt="Aperçu de la Galerie Produits sur ordinateur et tablette"
              width={1280}
              height={800}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/30" />
          </div>
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-14 flex flex-col justify-between gap-10">
            <div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80 hover:text-[#22c55e] transition"
              >
                <span aria-hidden>←</span> Retour aux projets
              </Link>
              <p className="mt-8 text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
                ◆ Étude · 2025
              </p>
              <h1 className="mt-5 font-display font-light leading-[0.95] text-[clamp(2.25rem,6vw,4.25rem)] tracking-tight text-[#ffffff]">
                Galerie{" "}
                <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
                  Produits
                </span>
                .
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#ffffff]/75">
                Vitrine produits responsive pensée comme un catalogue éditorial : grille fluide,
                fiches soignées et filtres par catégorie pour naviguer sans friction.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/akeconstant8-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lux inline-flex items-center gap-2 bg-[#22c55e] text-[#071510] px-5 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold hover:bg-[#22c55e] transition shadow-[0_10px_30px_-10px_rgba(34, 197, 94,0.6)]"
              >
                <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.04 11.04 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                </svg>
                Code source
              </a>
              <a
                href="https://galerie-produits-nwq8.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#22c55e] text-[#22c55e] px-5 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold hover:bg-[#22c55e] hover:text-[#071510] transition"
              >
                Démo live <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stack + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#22c55e]/15">
          <div className="lg:col-span-4 p-6 sm:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#22c55e]/15">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">§ Stack</p>
            <ul className="mt-6 space-y-3">
              {stack.map((s) => (
                <li key={s} className="flex items-center gap-3 text-[#ffffff]">
                  <span aria-hidden className="h-px w-6 bg-[#22c55e]" />
                  <span className="font-display text-lg">{s}</span>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
              § Rôle
            </p>
            <p className="mt-3 font-display text-lg text-[#ffffff]">
              Conception <span className="italic text-[#22c55e]">& intégration</span>
            </p>

            <p className="mt-12 text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
              § Année
            </p>
            <p className="mt-3 font-display text-lg text-[#ffffff]">2025</p>
          </div>

          <div className="lg:col-span-8 p-6 sm:p-10 lg:p-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">§ Contexte</p>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl leading-tight text-[#ffffff]">
              Un catalogue qui se lit comme un magazine.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[#ffffff]/75">
              <p>
                Galerie Produits est une vitrine pensée pour mettre en valeur des pièces
                individuelles : photographie au premier plan, typographie soignée, et une navigation
                par catégories qui respecte le rythme de lecture.
              </p>
              <p>
                Construite en HTML, CSS et JavaScript vanille, renforcée par Bootstrap pour la
                grille responsive et les composants utilitaires. L'objectif : un rendu premium qui
                reste ultra-léger et accessible sur tous les appareils.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 border-b border-[#22c55e]/15">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
            § Caractéristiques
          </p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#ffffff] max-w-3xl">
            Ce qui rend la galerie <span className="italic text-[#22c55e]">soignée</span>.
          </h2>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#22c55e]/15">
            {features.map((f, i) => (
              <li key={f.title} className="bg-[#071510] p-6 sm:p-8 flex flex-col gap-3">
                <span className="font-display italic text-[#22c55e] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-[#ffffff]">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#ffffff]/70">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Screens */}
        <div className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 border-b border-[#22c55e]/15">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">§ Aperçus</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="relative aspect-[4/3] overflow-hidden bg-[#071510] border border-[#22c55e]/15">
              <img
                src={shot1}
                alt="Fiche produit en gros plan sur tablette"
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </figure>
            <figure className="relative aspect-[4/3] overflow-hidden bg-[#071510] border border-[#22c55e]/15">
              <img
                src={shot2}
                alt="Grille responsive de la galerie sur smartphone"
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">§ Suite</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl text-[#ffffff]">
              Découvrir d'autres pièces.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-[#22c55e]/40 text-[#ffffff] hover:border-[#22c55e] hover:text-[#22c55e] px-5 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold transition"
            >
              <span aria-hidden>←</span> Tous les projets
            </Link>
            <Link
              to="/contact"
              className="btn-lux inline-flex items-center gap-2 bg-[#22c55e] text-[#071510] hover:bg-[#22c55e] px-5 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold transition shadow-[0_10px_30px_-10px_rgba(34, 197, 94,0.6)]"
            >
              Discutons-en <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </article>
    </SiteFrame>
  );
}
