const SpecialService = () => {
  return (
    <section className="py-16 px-6 bg-[#f5f1e8]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-[#777] mb-3">
              This Week
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#333] mb-4">
              Harvest Service
            </h2>

            <p className="text-[#666] leading-relaxed mb-6">
              Join us this week for our harvest service.
              We would love to have you with us.
            </p>

            <p className="text-[#555] font-medium">
              Everyone is welcome.
            </p>
          </div>

          {/* Pamphlet Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/harvest-service.jpeg"
              alt="Special service this week"
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialService;