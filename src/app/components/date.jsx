"use client";
import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Date = () => {
  const iconSize = (width) => {
    if (width < 640) { // sm
      return 30;
    } else if (width < 768) { // md
      return 35;
    } else if (width < 1024) { // lg
      return 40;
    } else { // xl dan seterusnya
      return 45; // Ukuran sedikit lebih besar di layar sangat besar
    }
  };

  const clockSize = (width) => {
    if (width < 640) { // sm
      return 40;
    } else if (width < 768) { // md
      return 45;
    } else if (width < 1024) { // lg
      return 50;
    } else { // xl dan seterusnya
      return 55; // Ukuran sedikit lebih besar di layar sangat besar
    }
  };

  const [windowWidth, setWindowWidth] = React.useState(0);
  React.useEffect(() => {
    AOS.init({ duration: 650, once: true }); // Inisialisasi AOS
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id='date'
      className="p-4 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/img/bg1.png')",
      }}
    >
      <div className="bg-white mx-auto w-full sm:w-5/6 md:w-3/4 lg:max-w-[50rem] text-center mt-14 mb-14 p-8 rounded-lg">
        <div className="flex justify-center" data-aos="fade-up">
          <Image
            className="mx-auto my-4 w-24 sm:w-32 md:w-40 lg:w-48"
            src="/img/bunga.png"
            alt="Bunga"
            width={100}
            height={100}
          />
        </div>

        <h3 className="mx-auto text-center great-vibes-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold leading-tight" data-aos="fade-up">
          Tanggal & Waktu
        </h3>

        <div className="flex justify-center items-center mt-8 mb-8" data-aos="fade-up">
          <div className="flex flex-col items-center w-12 sm:w-16 md:w-20">
            <span className="text-2xl sm:text-3xl text-black font-semibold">03</span>
            <div className="border-t border-gray-600 w-full"></div>
          </div>
          <div className="text-lg sm:text-xl md:text-2xl mx-2 w-12 sm:w-16 md:w-20">
            <FaCalendarAlt size={iconSize(windowWidth)} className='text-[#68737D]' />
          </div>
          <div className="flex flex-col items-center w-12 sm:w-16 md:w-20">
            <span className="text-2xl sm:text-3xl text-black font-semibold">03</span>
            <div className="border-t border-gray-600 w-full"></div>
          </div>
        </div>

        <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl text-[#323332] leading-tight" data-aos="fade-up">
          Selasa,
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl">03 Maret 2025</span>
        </h2>

        <div className="mt-4" data-aos="fade-up">
          <p className="text-xl sm:text-2xl md:text-3xl text-black font-semibold">Rumah Kediaman:</p>
          <p className="text-xl sm:text-2xl md:text-3xl text-black">
            Br. Cucukan, Ds. Medahan,
            <br />
            Kec. Blahbatuh, Kab. Gianyar
          </p>
        </div>

        <div className="flex justify-center items-center mt-8 mb-8" data-aos="fade-up">
          <div className="flex flex-col items-center w-12 sm:w-16 md:w-20">
            <span className="text-2xl sm:text-3xl text-black font-semibold">09</span>
            <div className="border-t border-gray-600 w-full"></div>
          </div>
          <div className="text-black text-lg sm:text-xl md:text-2xl mx-2">:</div>
          <div className="flex flex-col items-center w-12 sm:w-16 md:w-20">
            <span className="text-2xl sm:text-3xl text-black font-semibold">00</span>
            <div className="border-t border-gray-600 w-full"></div>
          </div>
        </div>

        <div className="mt-4" data-aos="fade-up">
          <div className="mx-auto text-center great-vibes-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold leading-tight">
            Pukul:
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-[#B99769] rounded-full p-4 sm:p-5 md:p-6 mr-2 mt-6">
              <FaClock size={clockSize(windowWidth)} className="text-white" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl text-black">
            09.00 WITA - Selesai
          </div>
        </div>
      </div>
    </div>
  );
};

export default Date;
