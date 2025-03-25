
"use client";

import { useEffect, useState } from "react";

export function SplashCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 500);
    };

    // Hide default cursor and show custom cursor
    document.body.style.cursor = "none";
    
    // Add event listeners
    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("click", handleClick);
    
    // Handle cursor visibility when leaving/entering window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Cleanup function
    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] transition">
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ease-out ${
          clicked ? "scale-[20] bg-white/20 duration-300" : "scale-1 bg-white/60"
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: clicked ? "30px" : "10px",
          height: clicked ? "30px" : "10px",
          opacity: clicked ? 0 : 0.8,
          boxShadow: clicked ? "0 0 20px 5px rgba(255, 255, 255, 0.3)" : "0 0 10px rgba(255, 255, 255, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.8)",
        }}
      />
    </div>
  );
}
