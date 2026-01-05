"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 text-2xl font-bold"
    >
      <span className="text-red-600">Woxsen</span> Times
    </motion.header>
  );
}
