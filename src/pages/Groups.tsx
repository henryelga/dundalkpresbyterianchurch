// src/pages/Groups.jsx
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";

const groups = [
  {
    title: "Sunday School for Kids",
    image: "/images/sunday-school.jpg",
    desc: "Held during the Sunday morning service for children aged 4-12.",
  },
  {
    title: "Women's Bible Study",
    image: "/images/womens-bible-study.png",
    desc: "A home group meeting every other Thursday, 7:30-9:00 PM.",
  },
  {
    title: "Church Bible Study",
    image: "/images/church-bible-study.jpg",
    desc: "Meets in the church building every other Thursday, 7:30-9:00 PM.",
  },
  {
    title: "Bowls Group",
    image: "/images/bowls.jpg",
    desc: "Meets Wednesdays, 7:00-9:00 PM, and Fridays, 10:00 AM-12:00 PM. New people always welcome.",
  },
];

const Groups = () => {
  return (
    <div className="min-h-screen bg-[#FFF9E6]">
      {/* Top Bars */}
      <AnnouncementBar />
      <Navbar />

      {/* Page Header */}
      <section className="text-center py-12 px-6">
        <h1 className="text-3xl font-bold text-[#2A5D84] mb-2">Our Groups</h1>
        <p className="text-[#4B5563] max-w-2xl mx-auto">
          We'd love for you to join one of our groups. Whether you're new or
          looking for deeper fellowship, there's a place for you.
        </p>
      </section>

      {/* Groups Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16 flex flex-wrap justify-center gap-8">
        {groups.map((g, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden w-full sm:w-[48%] lg:w-[30%] flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={g.image}
                alt={g.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#2A5D84] mb-2">
                {g.title}
              </h3>
              <p className="text-[#4B5563] flex-grow">{g.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Groups;
