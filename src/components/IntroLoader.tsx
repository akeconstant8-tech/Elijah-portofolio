import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "elijah_intro_played";

export function IntroLoader() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const already = sessionStorage.getItem(SESSION_KEY);
    if (already) return;
    setShow(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(SESSION_KEY, "1");
      document.body.style.overflow = "";
    }, 1500);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#071510]"
          aria-hidden
        >
          {/* gold radial glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(34, 197, 94,0.18) 0%, transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* Outer rotating ring */}
            <motion.div
              initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 360, opacity: 1, scale: 1 }}
              transition={{
                rotate: { duration: 1.4, ease: "linear", repeat: Infinity },
                opacity: { duration: 0.4 },
                scale: { duration: 0.5, ease: "easeOut" },
              }}
              className="absolute w-[170px] h-[170px] rounded-full"
              style={{
                border: "1px solid rgba(34, 197, 94,0.25)",
                borderTopColor: "#22c55e",
              }}
            />
            {/* Monogram E */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 }}
              className="relative w-[130px] h-[130px] rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, rgba(34, 197, 94,0.18), transparent 65%)",
                border: "1px solid rgba(34, 197, 94,0.4)",
                boxShadow:
                  "0 0 60px -10px rgba(34, 197, 94,0.55), inset 0 0 25px rgba(34, 197, 94,0.12)",
              }}
            >
              <span
                className="font-['Playfair_Display'] italic text-[88px] leading-none"
                style={{
                  background: "linear-gradient(180deg,#f8e2a0 0%,#22c55e 55%,#22c55e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(34, 197, 94,0.4)",
                }}
              >
                E
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 text-[10px] tracking-[0.6em] uppercase text-[#22c55e]/80 font-['Outfit']"
            >
              ElijahCodex
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
