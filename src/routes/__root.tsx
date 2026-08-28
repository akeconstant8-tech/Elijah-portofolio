import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { GoldCursor } from "@/components/GoldCursor";
import { IntroLoader } from "@/components/IntroLoader";
import { WhatsAppFab } from "@/components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-[#071510] text-[#ffffff] flex items-center justify-center px-6 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
      />
      <div className="relative max-w-xl text-center">
        <p className="text-[11px] tracking-[0.5em] uppercase text-[#22c55e]">◆ Page Égarée</p>
        <div className="mt-8 font-['Playfair_Display'] italic text-[120px] sm:text-[180px] leading-none bg-gradient-to-b from-[#22c55e] via-[#22c55e] to-[#22c55e] bg-clip-text text-transparent">
          404
        </div>
        <div className="mt-2 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#22c55e] to-transparent" />
        <h1 className="mt-8 font-['Playfair_Display'] text-2xl sm:text-3xl text-[#ffffff]">
          Cette page n'est pas reliée au livre.
        </h1>
        <p className="mt-4 text-sm text-[#ffffff]/65 max-w-md mx-auto leading-relaxed">
          Vous avez tourné une page qui n'existe pas encore — ou qui a été retirée de l'édition.
          Revenons à la couverture.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="btn-lux inline-flex items-center gap-3 bg-[#22c55e] text-[#071510] px-7 py-3 text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#22c55e] transition shadow-[0_10px_30px_-10px_rgba(34, 197, 94,0.6)]"
          >
            Retour à la couverture <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Portfolio Front-End — ElijahCodex" },
      {
        name: "description",
        content:
          "Portfolio professionnel de Sagne Ake Pierre Constant, développeur web front-end basé à Abidjan.",
      },
      { name: "author", content: "Sagne Ake Pierre Constant" },
      { property: "og:title", content: "Portfolio Front-End — ElijahCodex" },
      {
        property: "og:description",
        content:
          "Portfolio premium or et noir : projets front-end, études de cas et contact direct.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Portfolio Front-End — ElijahCodex" },
      {
        name: "twitter:description",
        content:
          "Portfolio premium or et noir : projets front-end, études de cas et contact direct.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@200;300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <IntroLoader />
      <GoldCursor />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
