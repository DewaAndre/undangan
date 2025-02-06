"use client";
import React from 'react';
import Image from 'next/image';

const Head = () => {

  const imageSize = (width) => {
    if (width < 640) { // sm breakpoint
      return "w-[20rem]";
    } else if (width < 768) { // md breakpoint
      return "w-80";
    } else if (width < 1024) { // lg breakpoint
      return "w-[24rem]";
    } else { // xl breakpoint dan seterusnya
      return "w-[28rem]";
    }
  };

  const bingkaiSize = (width) => {
    if (width < 640) { // sm breakpoint
      return "w-full";
    } else if (width < 768) { // md breakpoint
      return "w-5/6";
    } else if (width < 1024) { // lg breakpoint
      return "w-3/4";
    } else { // xl breakpoint dan seterusnya
      return "w-auto";
    }
  };

  const [windowWidth, setWindowWidth] = React.useState(0);
  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to get the width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#F8F6F0] flex flex-col items-center overflow-y-auto p-4 min-h-screen">
      <div className="w-full flex justify-center">
        <Image
          className={`my-4 ${imageSize(windowWidth)}`}
          src="/img/gelungan.png"
          alt="Gelungan"
          width={400}
          height={400}
        />
      </div>

      <div className="w-full flex justify-center">
        <Image
          className={`mx-auto ${bingkaiSize(windowWidth)}`}
          src="/img/bingkai.png"
          alt="Bingkai"
          width={600}
          height={600}
        />
      </div>

      <button className="bg-[#B99769] hover:bg-[#533f23] text-white font-bold my-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Save the Date
      </button>

      <div className="w-full flex justify-center">
        <Image
          className={`my-8 ${imageSize(windowWidth)}`}
          src="/img/gelungan.png"
          alt="Gelungan"
          width={400}
          height={400}
        />
      </div>

      <h2 className="mx-auto text-center great-vibes-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold leading-tight">Om Swastiastu</h2>
      <div className="flex items-center justify-center my-12 max-w-[90%] md:max-w-[70rem]">
        <p className="mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, perkenankan kami mengundang Bapak/Ibu/Saudara/i, pada Upacara Dewa Yadnya Melaspas Merajan keluarga kami. Yang akan dilaksanakan pada :
        </p>
      </div>
    </div>
  );
};

export default Head;