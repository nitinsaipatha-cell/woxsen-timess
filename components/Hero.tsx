"use client";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function Hero() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6"
    >
      <p className="text-lg">Landing page.</p>
    </motion.section>
  );
}
