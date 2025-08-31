const highlights = [
  {
    title: "Groups",
    desc: "Find a group to grow in faith and fellowship.",
    link: "#groups",
    img: "/images/groups.jpg",
  },
  {
    title: "Events",
    desc: "Stay updated on what’s happening this month.",
    link: "#events",
    img: "/images/events.png",
  },
  {
    title: "FAQs",
    desc: "Get answers to common questions.",
    link: "#faqs",
    img: "/images/faqs.png",
  },
];

const Highlights = () => {
  return (
    <section className="bg-[#FFF9E6] py-12">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
        {highlights.map((h, idx) => (
          <a
            key={idx}
            href={h.link}
            className="bg-white rounded-xl shadow hover:shadow-lg transition hover:bg-[#F0C14B] hover:text-white flex flex-col items-center"
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
