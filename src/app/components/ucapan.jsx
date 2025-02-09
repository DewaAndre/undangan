"use client";
import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaCheckDouble, FaTimesCircle, FaTrash } from 'react-icons/fa';

const Ucapan = () => {
  const [nama, setNama] = useState('');
  const [ucapan, setUcapan] = useState('');
  const [kehadiran, setKehadiran] = useState('Hadir');
  const [daftarUcapan, setDaftarUcapan] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUcapan = async () => {
      try {
        const response = await fetch('/api/ucapan');
        console.log("Response Status:", response.status); // Lihat status kode response
        console.log("Response Headers:", response.headers);
        const responseText = await response.text(); // Ambil isi response
        console.log("Response Body:", responseText); // Lihat isi response
  
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
  
        const data = JSON.parse(responseText); // Konversi ke JSON
        setDaftarUcapan(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
  
    fetchUcapan();
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nama.trim() !== "" && ucapan.trim() !== "") {
      const newUcapan = { nama, ucapan, kehadiran };

      setIsLoading(true);

      try {
        const response = await fetch('/api/ucapan', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUcapan),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Gagal mengirim data. Status: ' + response.status);
        }

        const data = await response.json();
        setDaftarUcapan([...daftarUcapan, data]);

        setNama('');
        setUcapan('');
        setKehadiran('Hadir');
      } catch (error) {
        console.error('Terjadi kesalahan saat mengirim data:', error);
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Nama dan ucapan tidak boleh kosong!");
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/ucapan/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal menghapus data");
      }

      setDaftarUcapan(daftarUcapan.filter(item => item.id !== id));
      alert("Ucapan berhasil dihapus!");
    } catch (error) {
      console.error("Terjadi kesalahan saat menghapus data:", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  const renderStatus = (kehadiran) => {
    switch (kehadiran) {
      case 'Hadir':
        return (
          <span className="text-green-500 mr-2 flex items-center">
            <FaCheckCircle className="h-5 w-5 mr-1" />
            Hadir
          </span>
        );
      case 'Akan Hadir':
        return (
          <span className="text-yellow-500 mr-2 flex items-center">
            <FaCheckDouble className="h-5 w-5 mr-1" />
            Akan Hadir
          </span>
        );
      case 'Tidak Hadir':
        return (
          <span className="text-gray-500 mr-2 flex items-center">
            <FaTimesCircle className="h-5 w-5 mr-1" />
            Tidak Hadir
          </span>
        );
      default:
        return null;
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

          <button type="submit" disabled={isLoading} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {isLoading ? 'Mengirim...' : 'Kirimkan Ucapan'}
          </button>
        </form>

        <div className="border rounded p-4">
          {daftarUcapan.length > 0 ? (
            daftarUcapan.map((item) => (
              <div key={item.id} className="mb-2 p-2 border rounded flex items-center justify-between">
                <div className="flex items-center">
                  <strong className="font-bold mr-2 text-black">{item.nama}:</strong>
                  {renderStatus(item.kehadiran)}
                  <div className='text-black ml-2'>{item.ucapan}</div> {/* Pindahkan ucapan ke sini */}
                </div>
                <button onClick={() => handleDelete(item.id)} className="text-red-500">
                  <FaTrash className="h-5 w-5" />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Belum ada ucapan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ucapan;
