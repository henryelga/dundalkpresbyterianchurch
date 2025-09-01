import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Highlights from "../components/Highlights";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AnimatedWrapper from "../components/AnimatedWrapper";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div className="font-sans text-[#333] bg-[#fdfdfd]">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />

      <AnimatedWrapper>
        <Hero />
      </AnimatedWrapper>

      <AnimatedWrapper>
        <About />
      </AnimatedWrapper>

      <AnimatedWrapper>
        <Highlights />
      </AnimatedWrapper>

      <AnimatedWrapper>
        <Contact />
      </AnimatedWrapper>

      <Footer />
    </div>
  );
};

export default Home;
