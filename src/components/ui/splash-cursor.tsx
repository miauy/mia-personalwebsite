
"use client";

import { useEffect, useState } from "react";

export function SplashCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 500);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 transition">
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ease-out ${
          clicked ? "scale-[20] bg-white/20 duration-300" : "scale-1 bg-white/60"
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: clicked ? "30px" : "10px",
          height: clicked ? "30px" : "10px",
          opacity: clicked ? 0 : 1,
          boxShadow: clicked ? "0 0 20px 5px rgba(255, 255, 255, 0.3)" : "none",
        }}
      />
    </div>
  );
}
