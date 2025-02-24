"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const Head = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Inisialisasi AOS dengan durasi lebih cepat
    AOS.init({ duration: 650, once: true }); // Set durasi 300ms untuk animasi cepat
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToLokasi = () => {
    const lokasiElement = document.getElementById("date");
    if (lokasiElement) {
      lokasiElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F8F6F0] flex flex-col items-center min-h-screen">
      {/* Gambar Atas */}
      <div className="w-full flex justify-center">
        <Image
          className="my-4"
          src="/img/gelungan.png"
          alt="Gelungan"
          width={400}
          height={400}
          data-aos="zoom-in" // AOS Animation
        />
      </div>

      {/* Bingkai */}
      <div className="w-full flex justify-center">
        <Image
          className="mx-auto"
          src="/img/bingkai.png"
          alt="Bingkai"
          width={600}
          height={600}
          data-aos="zoom-in" // AOS Animation
        />
      </div>

      <button
        className="bg-[#B99769] hover:bg-[#533f23] text-white font-bold my-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={scrollToLokasi}
        data-aos="fade-up" // AOS Animation
      >
        Save the Date
      </button>

      {/* Gambar Bawah */}
      <div className="w-full flex justify-center">
        <Image
          className="my-8"
          src="/img/gelungan.png"
          alt="Gelungan"
          width={400}
          height={400}
          data-aos="zoom-in" // AOS Animation
        />
      </div>

      {/* Teks Om Swastiastu */}
      <h2
        className="mx-auto text-center great-vibes-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold leading-tight"
        data-aos="fade-down" // AOS Animation
      >
        Om Swastiastu
      </h2>

      {/* Paragraf Undangan */}
      <div className="flex items-center justify-center my-12 max-w-[90%] md:max-w-[70rem]">
        <p
          className="mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed"
          data-aos="fade-up" // AOS Animation
        >
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
          Maha Esa, perkenankan kami mengundang Bapak/Ibu/Saudara/i, pada
          Upacara Rsi Gana, Ngenteg Linggih Lan Mepandes putra-putri kami. Yang
          akan dilaksanakan pada :
        </p>
      </div>
    </div>
  );
};

export default Head;
