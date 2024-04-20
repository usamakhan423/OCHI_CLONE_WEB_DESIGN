import About from "./components/About";
import Cards from "./components/Cards";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Playful from "./components/Playful";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="h-screen bg-sky-900">
        <Navbar />
        <Header />
        <div className="bg-gray-900">
          <Marquee />
        </div>
        <About />
        <Playful />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
