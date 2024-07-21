import Calculator from "./layout/Calculator";
import CreditCards from "./layout/CreditCard";
import VideoBackground from "./layout/video";
import Advantages from "./layout/advantages";
import Footer from "./layout/footer";
import KreditKalkulyatoru from "./layout/kredit"; 
import Navbar from "./layout/navbar";
import Slider from "./layout/slider";


function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Advantages />
      <KreditKalkulyatoru />
      <CreditCards />
      <VideoBackground />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
