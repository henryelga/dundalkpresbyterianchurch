import { useState, useRef } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedWrapper from "../components/AnimatedWrapper";
import ScrollToTop from "../components/ScrollToTop";

const FAQS = [
  {
    question: "What kind of church is Dundalk Presbyterian Church?",
    answer: `Dundalk Presbyterian Church is a Christian community of ordinary people from a variety of backgrounds and places who want to know and learn more about what it is to follow Jesus in every aspect of our lives.
We are a part of the larger Presbyterian denomination on the Island of Ireland.`,
  },
  {
    question: "What is the doctrine of the church?",
    answer: `We are a reformed Christian church with a strong emphasis on the Sovereignty of God, the Kingship of Christ and the authority of the Bible.`,
  },
  {
    question: "How long is the service?",
    answer: `The service lasts around 1 hour, from 11:00 AM to about 12:00 PM.`,
  },
  {
    question: "What is the worship style?",
    answer: `At our morning services; prayers are said, a mix of contemporary and traditional hymns are sung, the scriptures are read and explained.`,
  },
  {
    question: "What do the children do during the service?",
    answer: `Children are always welcome. The children stay in for the first part of the service. After the Children's Talk, the children head out to the creche or Sunday School organized by our Sunday School teachers.`,
  },
  {
    question: "How can I get to know people from the church?",
    answer: `After the Sunday morning worship service, we have tea and coffee for everyone, as this is a good opportunity to get to know new people and to connect with each other.
If you feel like Dundalk Presbyterian Church is for you, you are welcome to join the different church groups taking place during weekdays.`,
  },
  {
    question: "Is there parking available?",
    answer: `We have a church car park that is free to use. Also there is on-street parking on Jocelyn Street, which is free on Sundays.`,
  },
];

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
