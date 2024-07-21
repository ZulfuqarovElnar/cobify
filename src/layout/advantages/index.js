import React from 'react';

export default function Advantages() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Bizim Üstünlüklərimiz
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img src='assets/images/advantages-icon1.svg' alt='' className="h-16 w-16 mb-4"/>
            <h1 className="text-xl font-semibold mb-2">Asan rəsmiləşmə</h1>
            <p className="text-gray-600">5 dəqiqə ərzində rəsmiləşdirmə ilə ehtiyacınız olan məbləği dərhal alın</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img src='assets/images/advantages-icon2.svg' alt='' className="h-16 w-16 mb-4"/>
            <h1 className="text-xl font-semibold mb-2">Biznesinizə dəstək</h1>
            <p className="text-gray-600">Sərfəli kredit şərtləri ilə daim sahibkarların yanındayıq</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img src='assets/images/advantages-box3.svg' alt='' className="h-16 w-16 mb-4"/>
            <h1 className="text-xl font-semibold mb-2">Münasib faizlər</h1>
            <p className="text-gray-600">Münasib illik faiz və komissiya ilə xərclərinizə qənaət edin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
