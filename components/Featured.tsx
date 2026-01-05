"use client";
import { motion } from "framer-motion";

export default function Featured() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-red-500 h-56 m-6 flex justify-center items-center"
    >
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-200 w-32 h-40"
      />
    </motion.section>
  );
}
