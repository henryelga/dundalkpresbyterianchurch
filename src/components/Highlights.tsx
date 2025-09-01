import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Groups",
    desc: "Find a group to grow in faith and fellowship.",
    link: "/groups",
    img: "/dundalkpresbyterianchurch/images/groups.jpg",
  },
  {
    title: "Activities",
    desc: "Stay updated on what's happening this month.",
    link: "/activities",
    img: "/dundalkpresbyterianchurch/images/events.jpg",
  },
  {
    title: "FAQs",
    desc: "Get answers to common questions.",
    link: "/faqs",
    img: "/dundalkpresbyterianchurch/images/faqs.jpg",
  },
];

const Highlights = () => {
  return (
    <section className="bg-[#FFF9E6] py-12">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
        {highlights.map((h, idx) => (
          <Link
            key={idx}
            to={h.link} // use 'to' instead of href
            className="bg-white rounded-xl shadow hover:shadow-lg transition hover:bg-[#f0d799] hover:text-white flex flex-col items-center"
          >
            <div className="w-full aspect-square overflow-hidden rounded-t-xl">
              <img
                src={h.img}
                alt={h.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#2A5D84] mb-2">
                {h.title}
              </h3>
              <p className="text-[#4B5563]">{h.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
