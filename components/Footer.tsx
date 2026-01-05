"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="p-6 flex gap-4">
      {["🌐", "📷", "💼", "🐦"].map((icon, i) => (
        <motion.span
          key={i}
          whileHover={{ y: -4 }}
          className="cursor-pointer"
        >
          {icon}
        </motion.span>
      ))}
    </footer>
  );
}
