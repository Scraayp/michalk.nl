"use client";

import { motion } from "framer-motion";

export function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-primary rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderRadius: ["50%", "30%", "50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 border-t-4 border-primary/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}
