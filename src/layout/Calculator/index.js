const Calculator = () => {
    return (
      <div className="relative py-10 px-10 sm:px-20 overflow-hidden">
        <div className="relative h-[350px] md:h-[250px] px-0 py-5 z-10 flex items-center justify-between md:px-10 overflow-hidden bg-black bg-opacity-50">
          <div className="text-left text-white p-8">
            <h1 className="text-4xl font-bold">Kredit kalkulyatoru</h1>
            <p className="mt-4">Əldə etmək istədiyiniz məbləği sizə uyğun aylıq bölğü ilə asanlıqla hesablayın.</p>
            <button className="mt-6 px-6 py-2 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black">
              İndi hesabla
            </button>
          </div>
          <img className="w-[300px] h-[200px] object-cover object-top mt-12" src="assets/images/callToAction.png" alt="" />
        </div>
      </div>
    );
  };
  
  export default Calculator;