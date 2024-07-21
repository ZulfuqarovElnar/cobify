import React, { useState } from 'react';

const KreditKalkulyatoru = () => {
  const [kreditMeblegi, setKreditMeblegi] = useState(1000);
  const [illikFaiz, setIllikFaiz] = useState(35);
  const [kreditMuddati, setKreditMuddati] = useState(5);

  const aylıqOdenis = (kreditMeblegi / kreditMuddati).toFixed(2);
  const odenilecekFaiz = ((kreditMeblegi * illikFaiz) / 100 / 12 * kreditMuddati).toFixed(2);
  const toplamMebleg = (parseFloat(kreditMeblegi) + parseFloat(odenilecekFaiz)).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden px-8 py-20 flex flex-col justify-center items-center gap-10 sm:flex-row sm:gap-2">
          <div className='flex flex-col justify-center items-center w-[300px]'>
            <h1 className="text-3xl font-bold mb-2">NAS Project</h1>
            <p className="text-gray-700 mb-6 text-center">"Nas Project BOKT" Azərbaycan Respublikasının Mərkəzi Bankının 10 iyun 2021-ci il tarixli, BKT -38 saylı lisenziyası əsasında fəaliyyət göstərir.</p>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full">Daha ətraflı</button>
          </div>
          
          <img className='w-[400px] h-[200px] lg:w-[200px] lg:h-[130px]' src='assets/images/macbook_.png' alt=''/>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden p-8">
          <h2 className="text-2xl font-bold mb-4">Kredit kalkulyatoru</h2>

          <div className="flex gap-3 justify-center items-center flex-wrap py-5 ">
            <div className='w-[160px] border rounded px-4 pt-5 pb-2.5 relative'>
              <label className="block text-gray-700 font-medium">Kreditin məbləği</label>
              <div className='mt-1 flex justify-between'>
                <p className=" text-green-600 font-semibold">{kreditMeblegi}</p>
                <p className='text-green-600 font-semibold'>AZN</p>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                value={kreditMeblegi}
                onChange={(e) => setKreditMeblegi(e.target.value)}
                className="w-full absolute left-0 range-slider"
              />
              
            </div>
            <div className='w-[160px] border rounded px-4 pt-5 pb-2.5 relative'>
              <label className="block text-gray-700 font-medium">İllik faiz</label>
              <p className="mt-1 text-green-600 font-semibold">{illikFaiz} %</p>
              <input
                type="range"
                min="0"
                max="100"
                value={illikFaiz}
                onChange={(e) => setIllikFaiz(e.target.value)}
                className="w-full absolute left-0 range-slider"
              />
              
            </div>

            <div className=' w-[160px] border rounded px-4 pt-5 pb-2.5 relative'>
              <label className="block text-gray-700 font-medium">Kreditin müddəti</label>
              <div className='flex justify-between mt-1'>
                <p className="text-green-600 font-semibold">{kreditMuddati}</p>
                <p className='text-green-600 font-semibold'>Ay</p>
              </div>
              <input
                type="range"
                min="1"
                max="36"
                value={kreditMuddati}
                onChange={(e) => setKreditMuddati(e.target.value)}
                className="w-full absolute left-0 range-slider"
              />
              
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex justify-between items-center">
              <p>Aylıq ödəniş</p>
              <p className="font-semibold">{aylıqOdenis} AZN</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Ödəyəcəyiniz faiz</p>
              <p className="font-semibold">{odenilecekFaiz} AZN</p>
            </div>
            <div className="flex justify-between items-center mt-4 text-lg font-bold">
              <p>TOPLAM MƏBLƏĞ</p>
              <p className="text-yellow-500">{toplamMebleg} AZN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KreditKalkulyatoru;
