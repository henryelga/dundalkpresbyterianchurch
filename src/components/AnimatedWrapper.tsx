import { useEffect, useState } from "react";

const AnimatedWrapper = ({ children }: { children: React.ReactNode }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50); // small delay
    return () => setAnimate(false); // reset on unmount
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
