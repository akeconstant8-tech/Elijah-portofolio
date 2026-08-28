import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFrame } from "@/components/SiteFrame";
import cover from "@/assets/project-kingdev.jpg";
import shot1 from "@/assets/kingdev-detail-1.jpg";
import shot2 from "@/assets/kingdev-detail-2.jpg";
import shot3 from "@/assets/kingdev-detail-3.jpg";
import testimonialDavid from "@/assets/testimonial-david.jpg";

export const Route = createFileRoute("/case-study/kingdev")({
  head: () => ({
    meta: [
      { title: "Étude de cas — KingDev Shopping · ElijahCodex" },
      {
        name: "description",
        content:
          "Étude de cas KingDev Shopping : problème, approche, solution et résultats mesurables. Une boutique e-commerce ivoirienne conçue par Sagne Ake Pierre Constant.",
      },
      { property: "og:title", content: "Étude de cas — KingDev Shopping" },
      {
        property: "og:description",
        content: "Storytelling complet : problème, approche, solution, résultats chiffrés.",
      },
    ],
  }),
  component: CaseStudyKingDev,
});

function CaseStudyKingDev() {
  return (
    <SiteFrame chapter="Étude de cas" section="KingDev Shopping" pageNumber="cs01">
      {/* Hero */}
      <section className="relative bg-[#071510] border border-[#22c55e]/25 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.25)]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 sm:p-12 md:p-16">
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
              ◆ Étude de cas · 01
            </p>
            <h1 className="mt-6 font-display font-light leading-[0.95] text-[clamp(2.25rem,6vw,4.75rem)] tracking-tight text-[#ffffff]">
              KingDev
              <br />
              <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
                Shopping.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#ffffff]/75">
              Comment j'ai transformé une vision entrepreneuriale en une boutique e-commerce
              premium, rapide et inspirant la confiance — pensée pour le marché ivoirien.
            </p>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
              {[
                { l: "Client", v: "David Komlan" },
                { l: "Secteur", v: "E-commerce" },
                { l: "Rôle", v: "Front-End" },
                { l: "Année", v: "2025" },
              ].map((f) => (
                <div key={f.l}>
                  <dt className="text-[10px] tracking-[0.3em] uppercase text-[#22c55e]/70">
                    {f.l}
                  </dt>
                  <dd className="mt-1 font-display text-base text-[#ffffff]">{f.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://kingdevshopping.ci"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lux inline-flex items-center gap-3 bg-[#22c55e] text-[#071510] px-6 py-3 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#22c55e] transition"
              >
                Voir le site <span aria-hidden>→</span>
              </a>
              <Link
                to="/projects"
                className="btn-lux-outline inline-flex items-center gap-3 border border-[#22c55e]/60 text-[#ffffff] px-6 py-3 text-[11px] tracking-[0.3em] uppercase hover:border-[#22c55e] hover:text-[#22c55e] transition"
              >
                Tous les projets
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-[#22c55e]/20">
            <img
              src={cover}
              alt="KingDev Shopping"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Storytelling */}
      {[
        {
          n: "I",
          title: "Le problème",
          body: "David Komlan voulait lancer une boutique en ligne en Côte d'Ivoire, mais les solutions existantes étaient soit trop génériques (templates impersonnels), soit trop lentes pour des connexions mobiles parfois capricieuses. Il fallait une interface qui inspire confiance dès la première seconde, lisible sur un smartphone d'entrée de gamme, et qui valorise les produits comme une vitrine d'enseigne premium — pas comme un catalogue technique.",
        },
        {
          n: "II",
          title: "Mon approche",
          body: "Brief, recherche de références, puis maquettage mobile-first. J'ai posé un système typographique clair, une grille stricte, et défini une palette resserrée pour que les produits respirent. Côté code : HTML sémantique, CSS modulaire, JavaScript ciblé (pas de framework lourd) et Bootstrap pour la grille responsive. Performance, accessibilité et SEO de base intégrés dès le départ — pas en correctif final.",
        },
        {
          n: "III",
          title: "La solution",
          body: "Une boutique en ligne complète : page d'accueil éditoriale, catalogue filtrable, fiches produits soignées, panier et parcours d'achat fluide. Chaque écran est pensé d'abord pour le mobile, puis enrichi sur desktop. Les images sont optimisées, le chargement progressif, et l'identité visuelle cohérente du logo au bouton « Commander ».",
        },
      ].map((step, i) => (
        <section
          key={step.n}
          className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.15)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            <aside className="md:col-span-4 p-8 sm:p-12 border-b md:border-b-0 md:border-r border-[#22c55e]/15 bg-gradient-to-br from-[#071510] via-[#0d0d0d] to-[#071510]">
              <span className="font-display italic text-5xl text-[#22c55e]">{step.n}</span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl text-[#ffffff] leading-tight">
                {step.title}
              </h2>
              <div className="mt-6 h-px bg-gradient-to-r from-[#22c55e]/50 via-[#22c55e]/15 to-transparent" />
            </aside>
            <div className="md:col-span-8 p-8 sm:p-12 md:p-14">
              <p className="text-[16px] leading-[1.75] text-[#ffffff]/80 max-w-2xl">{step.body}</p>
              {i === 2 && (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[shot1, shot2, shot3].map((src, j) => (
                    <div
                      key={j}
                      className="aspect-[4/3] overflow-hidden border border-[#22c55e]/25 bg-[#071510]"
                    >
                      <img
                        src={src}
                        alt={`KingDev capture ${j + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Résultats chiffrés */}
      <section className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden shadow-[0_60px_120px_-40px_rgba(34, 197, 94,0.2)]">
        <div className="px-6 sm:px-12 md:px-20 pt-12 pb-8 border-b border-[#22c55e]/15">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#22c55e]">
            ◆ IV · Résultats mesurables
          </p>
          <h2 className="mt-4 font-display font-light text-[clamp(2rem,5vw,3.5rem)] text-[#ffffff] leading-[0.95]">
            Les chiffres{" "}
            <span className="italic bg-gradient-to-r from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
              parlent.
            </span>
          </h2>
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { k: "100%", l: "Score mobile-first", d: "Lisible sur tout écran" },
            { k: "< 2s", l: "Temps de chargement", d: "Optimisé pour la 3G" },
            { k: "+40%", l: "Temps passé / session", d: "vs ancien site" },
            { k: "x3", l: "Demandes entrantes", d: "premier trimestre" },
          ].map((s, i) => (
            <li
              key={s.k}
              className={[
                "p-8 sm:p-10 border-b border-[#22c55e]/15 text-center",
                i < 3 ? "lg:border-r" : "",
                i % 2 === 0 ? "border-r" : "",
                i >= 2 ? "lg:border-b-0" : "",
              ].join(" ")}
            >
              <div className="font-display text-5xl sm:text-6xl bg-gradient-to-b from-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
                {s.k}
              </div>
              <div className="mt-3 text-[11px] tracking-[0.3em] uppercase text-[#22c55e]">
                {s.l}
              </div>
              <div className="mt-2 text-[12px] text-[#ffffff]/55">{s.d}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Témoignage rappel */}
      <section className="mt-10 sm:mt-14 bg-[#071510] border border-[#22c55e]/20 rounded-sm overflow-hidden p-8 sm:p-14 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
        <div className="w-28 h-28 sm:w-32 sm:h-32 overflow-hidden border border-[#22c55e]/40 mx-auto md:mx-0">
          <img src={testimonialDavid} alt="David Komlan" className="w-full h-full object-cover" />
        </div>
        <div>
          <blockquote className="font-display italic text-lg sm:text-xl leading-relaxed text-[#ffffff]">
            <span className="text-[#22c55e] text-4xl leading-none mr-1">"</span>
            Un travail bien fait, propre, à l'image de ma marque. Elijah est devenu mon partenaire
            de référence pour tout ce qui touche au web.
          </blockquote>
          <div className="mt-4 text-[10px] tracking-[0.35em] uppercase text-[#22c55e]/80">
            — David Komlan · Fondateur, KingDev Shopping
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
