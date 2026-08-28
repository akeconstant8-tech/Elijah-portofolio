const WHATSAPP_MESSAGE = "Bonjour Constant, j'aimerais échanger avec vous au sujet d'un projet.";
const WA_URL = `https://wa.me/2250787675886?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function WhatsAppFab() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Me contacter sur WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-[0_14px_36px_-10px_rgba(37,211,102,0.65)] hover:shadow-[0_18px_44px_-10px_rgba(37,211,102,0.85)] hover:bg-[#1ebe5d] transition-all duration-300 hover:-translate-y-0.5 px-4 py-3 sm:px-5 sm:py-3.5"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-60" />
        <svg viewBox="0 0 32 32" className="relative h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M19.11 17.27c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.74.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.12 2.85.14.18 1.94 2.96 4.69 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.03 5.33C10.13 5.33 5.34 10.12 5.34 16c0 1.93.52 3.74 1.42 5.3L5.33 26.67l5.52-1.45a10.6 10.6 0 0 0 5.18 1.32h.01c5.9 0 10.69-4.79 10.69-10.67 0-2.85-1.11-5.53-3.13-7.54a10.6 10.6 0 0 0-7.57-3.13zm0 19.31h-.01a8.9 8.9 0 0 1-4.54-1.24l-.32-.19-3.27.86.87-3.19-.21-.33A8.85 8.85 0 0 1 7.09 16c0-4.91 4-8.91 8.93-8.91 2.39 0 4.63.93 6.31 2.61a8.85 8.85 0 0 1 2.62 6.3c0 4.91-4 8.91-8.92 8.91z" />
        </svg>
      </span>
      <span className="hidden sm:flex flex-col leading-tight pr-1">
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/80 font-['Outfit']">
          Réponse rapide
        </span>
        <span className="text-[13px] font-semibold font-['Outfit']">WhatsApp direct</span>
      </span>
    </a>
  );
}
