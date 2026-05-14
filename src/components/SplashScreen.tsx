import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onFinish: () => void;
};

const BG_URL = "/bgGray.jpg";

const SplashScreen: React.FC<Props> = ({ onFinish }) => {
  const [showLogo, setShowLogo] = useState(true);
  const [showBg, setShowBg] = useState(true);
  const [imageReady, setImageReady] = useState(false);
  const [minTimeReached, setMinTimeReached] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = BG_URL;
    if (img.complete) {
      setImageReady(true);
    } else {
      img.onload = () => setImageReady(true);
      img.onerror = () => setImageReady(true);
    }

    const minTimer = setTimeout(() => setMinTimeReached(true), 2200);
    return () => clearTimeout(minTimer);
  }, []);

  useEffect(() => {
    if (imageReady && minTimeReached) {
      const t1 = setTimeout(() => setShowLogo(false), 350);
      const t2 = setTimeout(() => setShowBg(false), 500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [imageReady, minTimeReached]);

  return (
    <>
      <AnimatePresence onExitComplete={onFinish}>
        {showBg && (
          <motion.div
            key="splash-bg"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-[998] bg-[#111] overflow-hidden"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(234,88,12,0.25) 0%, transparent 60%)",
              }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="h-12 sm:h-14 md:h-16" />

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 220, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.9, ease: "easeOut" }}
                className="mt-6 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              />

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="mt-4 text-[0.7rem] font-semibold tracking-[0.4em] text-white/50"
              >
                FRONT END DEVELOPER
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showLogo && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none">
          <motion.div
            layoutId="brand-logo"
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              opacity: { duration: 0.6, ease: "easeOut" },
              y: { duration: 0.6, ease: "easeOut" },
              filter: { duration: 0.6, ease: "easeOut" },
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
