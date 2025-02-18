"use client";
import React, { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Head from "./components/head";
import Date from "./components/date";
import Lokasi from "./components/lokasi";
import Time from "./components/time";
import Ucapan from "./components/ucapan";
import Footer from "./components/footer";
import Home from "./home";

const Page = () => {
  const [isHome, setIsHome] = useState(true);
  const audioRef = useRef(null);

  const playMusic = () => {
    console.log("playMusic dipanggil"); // Tambahkan ini
    console.log(audioRef.current); // Tambahkan ini
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.log("Autoplay error:", error));
    }
  };

  return (
    <div className="overflow-y-auto">
      <AnimatePresence mode="wait">
        {isHome ? (
          <Home
            key="home"
            onOpenInvitation={() => setIsHome(false)}
            onPlayMusic={playMusic}
          />
        ) : (
          <div>
            <Head />
            <Date />
            <Lokasi />
            <Time />
            <Ucapan />
            <Footer />
          </div>
        )}
      </AnimatePresence>

      <audio ref={audioRef} loop>
        <source src="/music/selonding.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Page;