import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-[#333] bg-[#fdfdfd]">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
