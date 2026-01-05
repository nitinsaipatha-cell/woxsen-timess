"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";

export default function NewsGrid() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-4 gap-4 p-6"
    >
      {[1, 2, 3, 4].map((_, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="bg-gray-200 h-32"
        />
      ))}
    </motion.section>
  );
}
