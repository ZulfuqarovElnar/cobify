
import React from 'react';


const VideoBackground = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src='assets/images/video.mp4'
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 pt-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white px-5">
          <h1 className="text-4xl  font-bold">Xəyalındakı biznesini indi qur</h1>
          <p className="mt-4">Bu yolda böyük dəstəkçiniz "NAS Project" sizə kömək edəcək.</p>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600">
            İNDİ BAŞLA
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
