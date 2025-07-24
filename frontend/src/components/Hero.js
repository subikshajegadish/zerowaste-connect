// src/components/Hero.js
import React from "react";

const emojis = ["🍕", "🍔", "🍩", "🍎", "🥦", "🥗", "🌮", "🍱", "🍉"];

const Hero = () => {
  return (
    <section className="relative bg-green-100 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-white overflow-hidden">
      {/* Falling emojis */}
      {Array.from({ length: 20 }).map((_, index) => (
        <span
          key={index}
          className="animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </span>
      ))}

      {/* Catchphrase */}
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl font-extrabold text-green-800 text-center max-w-3xl">
          Turning Leftovers into Love – Bridging Restaurants & NGOs to Eliminate Food Waste.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
