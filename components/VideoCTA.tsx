"use client";
import { motion } from "framer-motion";

export default function VideoCTA() {
  return (
    <motion.section
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="bg-red-500 w-24 h-16 rounded-lg flex items-center justify-center">
        ▶
      </div>
    </motion.section>
  );
}
