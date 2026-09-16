const Contact = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        {/* Left column: contact info */}
        <div className="md:w-1/2 flex flex-col justify-center text-[#4B5563] space-y-4">
          <h2
            className="text-3xl font-semibold text-[#2A5D84] relative inline-block mb-4
  after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full
  after:bg-[#2A5D84] after:rounded-full"
          >
            Contact Us
          </h2>

          <div>
            <p className="font-semibold text-lg">Rev. Jonathan Porter</p>
            <p>(00353) 86 051 8712</p>
          </div>

          <div>
            <p className="font-semibold text-lg">Sunday Service Time</p>
            <p>11am - 12pm</p>
          </div>

          <div>
            <p className="font-semibold text-lg">Church Address</p>
            <p>Dundalk Presbyterian Church</p>
            <p>Jocelyn St,</p>
            <p>Dundalk, Co. Louth</p>
            <p>Ireland</p>
            <p>A91 T224</p>
          </div>
        </div>

        <div className="md:w-1/2 w-full aspect-video md:aspect-auto rounded-xl overflow-hidden shadow">
          <iframe
            title="Church Location"
            className="w-full h-full border-0"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2344.8969530128384!2d-6.398130923709835!3d54.0046046252683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860cea04c52871f%3A0xdd404a4a5ddadb59!2sDundalk%20Presbyterian%20Church!5e0!3m2!1sen!2sie!4v1789566615285!5m2!1sen!2sie"
          ></iframe>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
