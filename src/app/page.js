import React from 'react';
import Head from './components/head'; 
import Date from './components/date';
import Lokasi from './components/lokasi';
import Time from './components/time';
import Ucapan from './components/ucapan';
import Footer from './components/footer';

const Page = () => { 
  return (
    <div className="overflow-y-auto">
      <Head /> 
      <Date />
      <Lokasi />
      <Time />
      <Ucapan />
      <Footer />
    </div>
  );
};

export default Page;
