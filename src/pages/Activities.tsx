import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// data/activities.ts
export const ACTIVITIES = [
  {
    day: "Wednesday",
    date: "10th September",
    time: "7:00 PM - 9:00 PM",
    location: "Church Hall",
    activity: "Indoor Bowling",
  },
  {
    day: "Friday",
    date: "12th September",
    time: "10:00 AM - 12:00 PM",
    location: "Church Hall",
    activity: "Indoor Bowling",
  },
  {
    day: "Every Saturday",
    date: "",
    time: "3:00 PM - 5:00 PM",
    location: "Church Hall",
    activity: "Table Tennis and Badminton Club",
  },
  {
    day: "Thursday",
    date: "4th & 18th September",
    time: "8:00 PM - 9:00 PM",
    location: "Church Building",
    activity: "Church Bible Study",
  },
  {
    day: "Monday",
    date: "8th September",
    time: "7:30 PM - 9:00 PM",
    location: "Church Building",
    activity: "Church Committee Meeting",
  },
  {
    day: "Sunday",
    date: "14th September",
    time: "11:00 AM",
    location: "Church Building",
    activity: "Worship Service - Mr Rick Hill",
  },
  {
    day: "Sunday",
    date: "21st September",
    time: "4:00 PM",
    location: "Church Building",
    notice: "NO SUNDAY MORNING SERVICE AT 11:00 AM ON 21st OF SEPTEMBER",
    activity: (
      <>
        Harvest Worship Service <br />
        Rev Damien Burke <br />
        1st Dromora Praise Group <br />& <br />
        Tea and Sandwiches in Hall afterwards
      </>
    ),
  },
];

const Activities = () => {
  return (
    <div className="min-h-screen bg-[#FFF9E6]">
      <AnnouncementBar />
      <Navbar />

      <section className="text-center py-12 px-6">
        <h1 className="text-3xl font-bold text-[#2A5D84] mb-2">Activities</h1>
        <p className="text-[#4B5563] max-w-2xl mx-auto mb-8">
          Check out our weekly and monthly activities. Everyone is welcome!
        </p>

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
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
