"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "./components/head";
import Date from "./components/date";
import Lokasi from "./components/lokasi";
import Time from "./components/time";
import Ucapan from "./components/ucapan";
import Footer from "./components/footer";
import Home from "./home";

const Page = () => {
  const [isHome, setIsHome] = useState(true); // Awalnya di halaman Home
  const audioRef = useRef(null); // Referensi ke elemen audio

  // Efek untuk memutar musik ketika halaman berubah
  useEffect(() => {
    // Pastikan musik diputar setelah berpindah dari halaman Home
    if (!isHome && audioRef.current) {
      audioRef.current.play(); // Memulai pemutaran musik
    }
  }, [isHome]); // Ketika state isHome berubah

  return (
    <div className="overflow-y-auto">
      <AnimatePresence mode="wait">
        {isHome ? (
          <Home key="home" onOpenInvitation={() => setIsHome(false)} />
        ) : (
          <div>
            {/* Menampilkan halaman setelah Home */}
            <Head />
            <Date />
            <Lokasi />
            <Time />
            <Ucapan />
            <Footer />
          </div>
        )}
      </AnimatePresence>

      {/* Elemen audio untuk memutar musik selonding */}
      {/* Musik hanya akan diputar jika isHome sudah false */}
      <audio ref={audioRef} loop>
        <source src="/music/selonding.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Page;
