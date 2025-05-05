import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/heroImg.webp";

const Homepage = () => {
  return (
    <div className="bg-[#080F3B] min-h-screen text-white font-sans overflow-x-hidden">

      <nav className="flex items-center justify-between px-6 py-4 bg-[#03142f] shadow-md">
        <img
          src="https://web.effervescentclasses.com/assets/img/logo-full.png"
          alt="Logo"
          className="h-10 w-auto"
        />
        <button className="bg-[#F2C756] md:ml-0 ml-1 md:text-lg text-xs cursor-pointer text-[#031b3c] md:px-4 px-1 py-1.5 rounded-lg font-bold hover:bg-[#f2c656e7] transition">
          Get Started
        </button>
      </nav>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-8 gap-12">
        <motion.div
          className="max-w-2xl space-y-6"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-[#f8c032]">
            Achieve 95%+ Scores!
          </h1>
          <h2 className="text-2xl md:-mt-4 mt-0 sm:text-3xl font-bold text-white leading-snug">
            ACHIEVE YOUR CA DREAMS
            <br />
            <span className="text-[#F2C756]">WITH EFFERVESCENT CLASSES</span>
          </h2>
          <p className="text-base md:-mt-2 mt-0 text-white/90 font-medium">
            Top-notch study materials and proven success in CA Foundation & Intermediate.
            <br />
            Clear your exams on the first attempt with our live and recorded classes.
          </p>
          <ul className="text-sm text-white/80 md:-mt-2 mt-0 space-y-1">
            <li>
              🎁 <span className="text-yellow-300 font-semibold">3 FREE Trial Classes</span> – Try Before You Enroll!
            </li>
            <li>💰 10% OFF – Save More with One-Time Advance Payment!</li>
            <li>🔥 Extra 2% OFF – Confirm at the earliest!</li>
          </ul>

          <p className="text-lg sm:text-xl font-semibold text-[#F2C756] ">
            Call Now:{" "}
            <span className="font-semibold">
              +91 9981559187 / +91 8959741019
            </span>
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F2C756] text-[#031b3c] text-lg cursor-pointer font-bold px-6 py-3 rounded-lg shadow-md transition-all"
          >
            BOOK YOUR FREE TRIAL CLASS TODAY!
          </motion.button>
        </motion.div>

        <motion.div
          className="flex-shrink-0 w-full max-w-md mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <img
            src={heroImg}
            alt="Effervescent Classes Hero"
            className="w-full rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
