import { motion } from "framer-motion";

const stars = Array.from({ length: 15 });

export default function ShootingStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-30 rotate-135 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, white, rgba(255,255,255,0))",
            left: Math.random() * 100 + "%",
            top: Math.random() * 50 + "%",
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: -700,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}