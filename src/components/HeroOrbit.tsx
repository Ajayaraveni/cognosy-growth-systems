import { motion } from "framer-motion";

/**
 * Animated network-orbit visualization. Inspired by the reference site:
 * a central node with satellite nodes orbiting on concentric dashed rings.
 */
export const HeroOrbit = () => {
  const nodes = [
    { x: 50, y: 8 },
    { x: 86, y: 26 },
    { x: 92, y: 64 },
    { x: 66, y: 92 },
    { x: 30, y: 92 },
    { x: 8, y: 64 },
    { x: 14, y: 26 },
  ];

  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* concentric dashed rings */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(217 91% 60% / 0.35)" />
            <stop offset="100%" stopColor="hsl(217 91% 60% / 0)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(217 91% 60% / 0.18)" strokeWidth="0.25" strokeDasharray="0.6 0.6" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="hsl(217 91% 60% / 0.22)" strokeWidth="0.25" strokeDasharray="0.6 0.6" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="hsl(217 91% 60% / 0.3)" strokeWidth="0.25" strokeDasharray="0.6 0.6" />
        <circle cx="50" cy="50" r="46" fill="url(#ringGlow)" opacity="0.6" />
      </svg>

      {/* slow rotation wrapper for satellite nodes */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {nodes.map((n, i) => (
          <motion.div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-[hsl(217_91%_60%/0.15)] border border-[hsl(217_91%_60%/0.4)] backdrop-blur-sm grid place-items-center shadow-[0_0_20px_hsl(217_91%_60%/0.25)]"
            >
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-sm bg-[hsl(217_91%_60%)]" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* center node */}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[hsl(217_91%_60%)] to-[hsl(217_91%_45%)] grid place-items-center shadow-[0_0_60px_hsl(217_91%_60%/0.6),inset_0_-4px_12px_hsl(0_0%_0%/0.3)]"
        >
          <span className="absolute inset-0 rounded-full bg-[hsl(217_91%_60%)] animate-ping opacity-20" />
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/95 shadow-[0_0_18px_hsl(0_0%_100%/0.8)]" />
        </motion.div>
      </div>
    </div>
  );
};
