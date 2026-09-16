import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedWrapper from "../components/AnimatedWrapper";
import ScrollToTop from "../components/ScrollToTop";
import { ACTIVITIES } from "../data/activities";

const Activities = () => {
  return (
    <div className="min-h-screen bg-[#FFF9E6]">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />

      <section className="text-center py-12 px-6">
        <h1 className="text-3xl font-bold text-[#2A5D84] mb-2">Activities</h1>
        <p className="text-[#4B5563] max-w-2xl mx-auto mb-8">
          Check out our weekly and monthly activities. Everyone is welcome!
        </p>

        <AnimatedWrapper>
          {/* Activities List */}
          <div className="flex flex-col space-y-6 max-w-5xl mx-auto">
            {ACTIVITIES.map((act, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row md:justify-between md:items-center"
              >
                {/* Left: Day and Date */}
                <div className="mb-3 md:mb-0 text-[#2A5D84] font-semibold md:w-1/4 text-center md:text-left">
                  <div>{act.day}</div>
                  {act.date && (
                    <div className="text-gray-600 text-sm">{act.date}</div>
                  )}
                </div>

                {/* Center: Time and Location */}
                <div className="mb-3 md:mb-0 md:w-1/4 text-center md:text-left text-[#4B5563] text-sm">
                  <div>{act.time}</div>
                  <div>{act.location}</div>
                  {act.notice && (
                    <div className="text-[#F0C14B] mt-1">{act.notice}</div>
                  )}
                </div>

                {/* Right: Activity */}
                <div className="md:w-1/3 text-center text-[#4B5563] font-medium">
                  {act.activity}
                </div>
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
