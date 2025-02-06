"use client";
import React, { useState } from 'react';

const ucapan = () => {
  const [nama, setNama] = useState('');
  const [ucapan, setUcapan] = useState('');
  const [kehadiran, setKehadiran] = useState('Hadir');
  const [daftarUcapan, setDaftarUcapan] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nama.trim() !== "" && ucapan.trim() !== "") {
      setDaftarUcapan([
        ...daftarUcapan,
        { nama, ucapan, kehadiran },
      ]);
      setNama('');
      setUcapan('');
      setKehadiran('Hadir');
    } else {
      alert("Nama dan ucapan tidak boleh kosong!");
    }
  };

  const renderStatus = (kehadiran) => {
    if (kehadiran === 'Hadir') {
      return (
        <span className="text-yellow-500 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 8a10 10 0 11-20 0 10 10 0 0120 0z"
            />
          </svg>
          Hadir
        </span>
      );
    } else {
      return (
        <span className="text-gray-500 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19h4a5 5 0 005-5V6a5 5 0 00-5-5H6a5 5 0 00-5 5v8a5 5 0 005 5z"
            />
          </svg>
          {kehadiran}
        </span>
      );
    }
  };

  return (
    <div
      className="p-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/bg2.png')",
      }}
    >
      <div className="bg-[#F7F6F1] mx-auto mt-10 mb-10 p-8 rounded-xl shadow-xl">
        <h3 className="mx-auto text-center great-vibes-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold mt-12 my-20 leading-tight">
          Kirim Ucapan
        </h3>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-2">
            <label htmlFor="nama" className="block text-gray-700 font-bold mb-2">
              Nama:
            </label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ucapan" className="block text-gray-700 font-bold mb-2">
              Ucapan & Doa Restu:
            </label>
            <textarea
              id="ucapan"
              value={ucapan}
              onChange={(e) => setUcapan(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="kehadiran" className="block text-gray-700 font-bold mb-2">
              Konfirmasi Kehadiran:
            </label>
            <select
              id="kehadiran"
              value={kehadiran}
              onChange={(e) => setKehadiran(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Hadir">Konfirmasi Kehadiran</option>
              <option value="Hadir">Hadir</option>
              <option value="Akan Hadir">Akan Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Kirimkan Ucapan
          </button>
        </form>

        <div className="border rounded p-4">
          {daftarUcapan.map((item, index) => (
            <div key={index} className="mb-2 p-2 border rounded flex items-center">
              <strong className="font-bold mr-2">{item.nama}:</strong>
              {renderStatus(item.kehadiran)}
              <div>{item.ucapan}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ucapan;
