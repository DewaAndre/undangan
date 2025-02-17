import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="bg-[#333] text-white py-8 px-4 ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-xl text-[#D3AE84]">Music</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-xl text-[#D3AE84]">Selonding Sekar Gadung</p>
        </div>
        <div className="flex items-center mt-10">
          <a
            href="https://api.whatsapp.com/send?phone=nomor_telepon_anda"
            className="flex items-center"
          >
            <FaWhatsapp className="h-6 w-6 mr-2 text-[#D3AE84]" />{" "}
            {/* Gunakan ikon FaWhatsapp */}
            <span className="text-sm text-[#D3AE84]">Whatsapp Us</span>
          </a>
        </div>
      </div>
      {/* <div className="container mx-auto mt-4 text-center">
        <img src="/path/ke/ikon/a.svg" alt="A" className="h-12 w-12 mx-auto" />
        <p className="text-xs mt-2">bhirama</p>
      </div> */}
    </footer>
  );
};

export default footer;
