import { useState } from "react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#2A5D84] text-white relative py-2 px-4 text-sm">
      {/* Centered text */}
      <span className="block text-center font-medium">
        Join us this Sunday at 11AM
      </span>
      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#F0C14B] transition"
      >
        ✕
      </button>
    </div>
  );
};

export default AnnouncementBar;
