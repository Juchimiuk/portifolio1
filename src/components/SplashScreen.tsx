import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onFinish?: () => void;
};

/** Só na primeira visita da aba — revisitar não deve custar 2 segundos. */
const SEEN_KEY = "juchimiuk:splash-seen";

const hasSeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

const SplashScreen: React.FC<Props> = ({ onFinish }) => {
  const [active, setActive] = useState(() => !hasSeen());
  const [showLogo, setShowLogo] = useState(() => !hasSeen());

  useEffect(() => {
    if (!active) return;

    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* modo privado: só não memoriza */
    }

    // Trava o scroll enquanto o splash está na frente.
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    // Sem imagem pesada para esperar: o fundo agora é shader.
    const t1 = setTimeout(() => setShowLogo(false), 1500);
    const t2 = setTimeout(() => setActive(false), 1650);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.overflow = prev;
    };
  }, [active]);

  return (
    <>
      <AnimatePresence onExitComplete={onFinish}>
        {active && (
          <motion.div
            key="splash-bg"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-[998] overflow-hidden bg-[#0a0a0a]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(234,88,12,0.25) 0%, transparent 60%)",
              }}
            />

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <div className="h-16 sm:h-20 md:h-24" />

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 220, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
                className="mt-6 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              />

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.45 }}
                className="mt-4 text-[0.7rem] font-semibold tracking-[0.4em] text-white/50"
              >
                DESENVOLVEDOR DE SOFTWARE
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showLogo && (
        <div className="pointer-events-none fixed inset-0 z-[1000] flex items-center justify-center">
          <motion.div
            layoutId="brand-logo"
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              opacity: { duration: 0.5, ease: "easeOut" },
              y: { duration: 0.5, ease: "easeOut" },
              filter: { duration: 0.5, ease: "easeOut" },
              layout: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
            }}
            className="flex items-center gap-5"
          >
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500 text-2xl font-bold text-white sm:h-20 sm:w-20 sm:text-3xl md:h-24 md:w-24 md:text-4xl">
              J
            </span>
            <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Juchimiuk
            </span>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SplashScreen;
