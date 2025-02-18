"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "aos/dist/aos.css"; // Import AOS CSS

const Lokasi = () => {
  const location = "https://maps.app.goo.gl/Nrei86FFa8iVHrgTA";
  const [windowWidth, setWindowWidth] = useState(0); // Initialize windowWidth

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Get initial width on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSize = (width) => {
    if (width < 640) {
      return "w-[30rem]";
    } else if (width < 768) {
      return "w-[32rem]";
    } else if (width < 1024) {
      return "w-[34rem]";
    } else {
      return "w-[38rem]";
    }
  };

  return (
    <div
      className="p-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/bg1.png')",
      }}
    >
      <div className="text-center mx-auto max-w-[90rem]" data-aos="fade-up">
        <Image
          className="mx-auto my-4"
          src="/img/bunga2.png"
          alt="Image"
          width={100}
          height={100}
        />
        <h3 className="mx-auto text-center great-vibes-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold leading-tight">
          Denah Lokasi
        </h3>

        <div className="mt-4 mb-6" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d569.2542532931182!2d115.34979093291736!3d-8.585896071345777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd21500674568fd%3A0xa129de019fc90eb9!2sAndre%20House!5e0!3m2!1sid!2sid!4v1737702507686!5m2!1sid!2sid"
            className="m-auto max-w-[60rem] w-full h-[350px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`${location}`}
          className="inline-flex items-center px-4 py-2 bg-[#484646] text-white font-bold rounded-lg shadow-md hover:bg-opacity-70"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt className="mr-2" /> Lihat di Google Maps
        </motion.a>
      </div>
      <h3
        className="mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed"
        data-aos="fade-up"
      >
        “Dengan Yadnya, semoga kami memperoleh sifat-sifat kemuliaan, kejayaan,
        kekuatan rohani, kekuatan jasmani, kesejahteraan dan perlindungan”
      </h3>
      <h3
        className="mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed"
        data-aos="fade-up"
      >
        (Yayurweda XV.113)
      </h3>

      <div className="mepandes my-60" data-aos="fade-up">
        <h3 className="mx-auto text-center great-vibes-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold leading-tight">
          Mepandes
        </h3>
        <h3 className="mx-auto mt-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
          Dewa Ayu Ananda Dea Anjelina
        </h3>
        <h3 className="mx-auto mt-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
          Dewa Gede Andrean Agus Ariandika
        </h3>
        <h3 className="mx-auto mt-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
          Dewa Gede Ari Putra
        </h3>
        <div className="flex justify-center">
          <Image
            className={`my-10 ${imageSize(windowWidth)}`}
            src="/img/bunga-garis.png"
            alt="Garis"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Lokasi;
