import About from "./components/About";
import Cards from "./components/Cards";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Playful from "./components/Playful";

function App() {
  return (
    <>
      <div className="h-screen bg-sky-900">
        <Navbar />
        <Header />
        <Marquee />
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
