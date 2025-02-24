import React from "react";
import Dropdown from "./dropdown";

const dudonan = () => {
  return (
    <div
      className="p-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/bg1.png')",
      }}
    >
      <div className="bg-white mx-auto w-full sm:w-5/6 md:w-3/4 lg:max-w-[50rem] text-center mt-14 mb-14 p-8 rounded-lg">
        <h3
          className="mx-auto text-center great-vibes-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold leading-tight pb-8"
          data-aos="fade-up"
        >
          Tanggal & Waktu
        </h3>
        <Dropdown title="03 Maret 2025" content="09.00 Mecaru Manca Kelud" />
        <Dropdown title="04 Maret 2025 " content="14.00 Puncak Karye" />
        <Dropdown title="05 Maret 2025" content="09.00 Mepandes" />
      </div>
    </div>
  );
};

export default dudonan;
