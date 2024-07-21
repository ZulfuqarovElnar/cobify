import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Kənd təsərrüfatı krediti",
    description: "Müəssisəmizin sərfəli təkliflərlə göstərdiyi çevik xidmət aqrar sahənin inkişafına ayırdığımız diqqətin tərənnümüdür. Biz aqrar sahədəki məhsulların rəqabət gücünün artırılması üçün aqrar sahibkarların daim yanındayıq.",
    descriptionOne: "Təklif etdiyimiz aşağı faizli kənd təsərrüfatı krediti ilə uğurunuzu bizlə qarantiyə alın.",
    imageUrl: "/assets/images/slider3.png",
  },
  {
    id: 2,
    title: "Lombard krediti",
    description: 'Qızıl krediti adı ilə də bilinən lombard krediti xidmətləri müəssisəmiz tərəfindən peşəkarcasına həyata keçirilir. Həm də sərfəli şərtlərlə.',
    descriptionOne: "Təklif etdiyimiz aşağı faizli kənd təsərrüfatı krediti ilə uğurunuzu bizlə qarantiyə alın.",
    imageUrl: "/assets/images/gold.png",
  },
  {
    id: 3,
    title: "Avtomobil lizinqi",
    description: '"NAS Project BOKT" avtomobil lizinqində sərfəli təkliflər edir. Sürətli rəsmiləşdirmə ilə ən qısa zamanda işlərinizi həll edirik.',
    descriptionOne: "Aşağı faizli kredit təklifləri ilə indi işlərinizin həlli daha asandır. Bizim sayt vasitəsilə vaxtınıza qənaət edin.",
    imageUrl: "/assets/images/lizinq1.png",
  },
  {
    id: 4,
    title: "Hörmətli müştərilər!",
    description: '"Nas Project BOKT" ASC müştərilərin kredit ödənişlərini operativ və rahat təşkil etmək məqsədi ilə eManat və Milli Ön terminallarına qoşulmuşdur.',
    descriptionOne: "Müştərilər həmçinin fpay.az saytı vasitəsi ilə onlayn ödənişləri də həyata keçirə bilərlər .",
    imageUrl: "/assets/images/pnn.png",
  },
  // Add more slides as needed
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full pt-10 h-auto lg:h-[540px] bg-slate-200 overflow-hidden">
      <div className="overflow-hidden px-4 md:px-20">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${
              index === currentSlide ? 'block' : 'hidden'
            } transition duration-500 ease-in-out transform`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between">
              <div className="p-4 w-[450px] text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                <p className="mt-4">{slide.description}</p>
                <p className='mt-3'>{slide.descriptionOne}</p>
                <button
                  className="mt-14 px-10 md:px-20 py-4 bg-gray-700 text-white rounded"
                  onClick={nextSlide}
                >
                  Daha ətraflı
                </button>
              </div>
              <div className="relative h-[500px] md:-right-40 z-10 ">
                <img src={slide.imageUrl} alt={slide.title} className="mx-auto md:mx-0 top-2 md:w-[592px] w-full right-0 md:right-5 h-full object-cover absolute z-10 " />
                <div className='absolute md:right-10 top-28 md:top-28 w-[450px] md:w-[450px] h-[450px] md:h-[450px] rounded-full bg-[#03a84e] -z-10 animate-grow'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentSlide ? 'bg-green-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 bg-gray-500 text-white px-2 md:px-4 py-2 rounded"
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 bg-gray-500 text-white px-2 md:px-4 py-2 rounded"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Slider;
