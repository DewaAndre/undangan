"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 650, once: true }); // Inisialisasi AOS

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-b border-black py-4" data-aos="fade-up">
      <button
        className="flex items-center justify-between w-full px-4 py-2 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span
            className={`mr-2 text-black text-xl transition-transform ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
          <span className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
            {title}
          </span>
        </div>
        <span
          className={`text-black text-lg transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? "v" : ">"}
        </span>
      </button>

      {isOpen && (
        <div
          className="mt-2 p-4 text-black text-sm sm:text-md md:text-lg leading-relaxed text-start rounded-lg"
          data-aos="fade-right"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
