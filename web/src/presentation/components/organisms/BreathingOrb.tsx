import { motion } from "framer-motion";

interface BreathingOrbProps {
  inhaleDuration: number;
  exhaleDuration: number;
  pauseDuration?: number;
  size?: number;
}

export function BreathingOrb({
  inhaleDuration,
  exhaleDuration,
  pauseDuration = 0,
  size = 220,
}: BreathingOrbProps) {
  const totalDuration = inhaleDuration + exhaleDuration + pauseDuration * 2;

  return (
    <div
      className="flex items-center justify-center relative"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute rounded-full border-2"
        style={{
          width: "100%",
          height: "100%",
          borderColor: "#BDBDBD",
        }}
      />

      <motion.div
        className="rounded-full"
        style={{
          width: "70%",
          height: "70%",
          backgroundColor: "#D9D9D9",
        }}
        animate={{
          scale: [1, 1.3, 1.3, 1],
        }}
        transition={{
          duration: totalDuration / 1000,
          ease: "easeInOut",
          times: [
            0,
            inhaleDuration / totalDuration,
            (inhaleDuration + pauseDuration) / totalDuration,
            (inhaleDuration + pauseDuration + exhaleDuration) / totalDuration,
          ],
          repeat: Infinity,
        }}
      />
    </div>
  );
}
