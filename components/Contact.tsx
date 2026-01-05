"use client";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function Contact() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6"
    >
      <h3 className="text-lg mb-2">Say hello.</h3>
      <div className="space-y-2">
        <div className="bg-gray-300 h-3 w-40" />
        <div className="bg-gray-300 h-3 w-56" />
      </div>
    </motion.section>
  );
}
