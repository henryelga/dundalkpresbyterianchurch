import { useState, useRef } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedWrapper from "../components/AnimatedWrapper";
import ScrollToTop from "../components/ScrollToTop";
import { FAQS } from "../data/faqs";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FFF9E6] font-sans">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />

      <AnimatedWrapper>
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-[#2A5D84] text-center mb-8">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-[#2A5D84] hover:bg-[#E6F2FA] transition"
                    onClick={() => toggleIndex(idx)}
                  >
                    {faq.question}
                    <span className="ml-2">{isOpen ? "−" : "+"}</span>
                  </button>

                  <div
                    ref={(el) => {
                      refs.current[idx] = el;
                    }}
                    className="px-6 overflow-hidden transition-[max-height] duration-500 ease-in-out text-[#4B5563] whitespace-pre-line border-t border-gray-200"
                    style={{
                      maxHeight: isOpen
                        ? refs.current[idx]?.scrollHeight + "px"
                        : "0px",
                    }}
                  >
                    <div className="py-4">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </AnimatedWrapper>

      <Footer />
    </div>
  );
};

export default Faqs;
