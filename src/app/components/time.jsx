"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css'; // Import AOS CSS


const Time = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 2, 3).getTime(); // Ubah tanggal di sini

    function calculateTimeLeft() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { hari: 0, jam: 0, menit: 0, detik: 0 };
      }

      return {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / (1000 * 60)) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSize = (width) => {
    if (width < 640) {
      return "w-[20rem]";
    } else if (width < 768) {
      return "w-80";
    } else if (width < 1024) {
      return "w-[24rem]";
    } else {
      return "w-[28rem]";
    }
  };

  return (
    <div
      className="p-4 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/img/bg2.png')",
      }}
    >
      <div className="mx-auto w-full sm:w-5/6 md:w-3/4 lg:max-w-[60rem]">
        <div className="mt-16 px-4 md:px-0" data-aos="fade-up">
          <h3 className="mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
            Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i, berkenan hadir untuk memberikan doa restu. Atas
            kehadirannya kami ucapkan terima kasih.
          </h3>
        </div>
        <h2 className="mx-auto text-center great-vibes-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold mt-12 my-20 leading-tight" data-aos="fade-up">
          Om Shanti Shanti Shanti Om
        </h2>
        <h3 className="mx-auto text-center great-vibes-regular text-[#323332] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
          Hitung Mundur
        </h3>
        <div className="flex justify-center items-center gap-4 mt-4 my-12 px-4 md:px-0" data-aos="fade-up">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-[#AF8F67] text-white px-0 py-3 rounded-lg text-center w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 basis-1/4 md:px-6"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {value}
              </span>
              <p className="text-sm sm:text-base md:text-lg capitalize">
                {unit}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center" data-aos="fade-up">
          <Image
            className={`my-10 ${imageSize(windowWidth)}`} // Ukuran responsif
            src="/img/garis.png"
            alt="Garis"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Time;
