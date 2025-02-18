"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function Home({ onOpenInvitation, onPlayMusic }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-[#FAF7F1] text-center px-4"
    >
      <Image src="/img/bingkai.png" alt="Bingkai" width={600} height={600} />

      <p className="text-lg font-bold mt-2 text-black">Tamu Undangan</p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          onOpenInvitation(); // Ganti halaman
          onPlayMusic(); // Putar musik
        }}
        className="mt-6 flex items-center space-x-2 px-6 py-2 bg-[#C8A67B] text-white rounded-full shadow-md hover:bg-[#b08c65] transition"
      >
        <span className="text-lg">📩</span>
        <span>Buka Undangan</span>
      </motion.button>
    </motion.div>
  );
}
