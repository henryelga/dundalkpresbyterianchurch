const Hero = () => {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/dundalkpresbyterianchurch/images/church.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 px-4">
        <h3 className="text-lg md:text-xl mb-2 drop-shadow-md">Welcome to</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          Dundalk Presbyterian Church
        </h2>
        <p className="text-md md:text-lg drop-shadow-md">
          Every Sunday · 11AM - 12PM
        </p>
      </div>
    </section>
  );
};

export default Hero;
