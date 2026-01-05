"use client";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function Team() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6"
    >
      <motion.h2
        variants={fadeUp}
        className="text-2xl font-bold text-red-600 mb-6"
      >
        Meet the Team
      </motion.h2>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-200 h-24"
          />
        ))}
      </div>
    </motion.section>
  );
}
