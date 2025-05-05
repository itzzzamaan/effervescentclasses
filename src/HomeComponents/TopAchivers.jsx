import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const achievers = [
  { name: "MUSKAN GUPTA", score: "97%", college: "JU", highlight: true },
  { name: "AVNIKA PANDITA", score: "96.4%", college: "SRCC", highlight: true },
  { name: "SNEHA MANTOO", score: "95.3%", college: "SRCC", highlight: true },
  { name: "AKSHIT MAHAJAN", score: "94.5%", college: "PURSING CA" },
  { name: "KHUSHI GUPTA", score: "94%", college: "JU" },
  { name: "MANSI GUPTA", score: "93.2%", college: "JU" },
  { name: "VIBHUTI BHASIN", score: "92%", college: "JU" },
  { name: "AKRITI KOUL", score: "91.25%", college: "JU" },
  { name: "VIJAY SHARMA", score: "90%", college: "JU" },
];

const stats = [
  { label: "Top Scorers", value: "200+" },
  { label: "Success Rate", value: "98%" },
  { label: "Colleges Cracked", value: "50+" },
  { label: "Years of Excellence", value: "10+" },
];

const TopAchievers = () => {
  return (
    <div className="bg-[#080F3B] -mt-2 text-white min-h-screen py-2 px-4 sm:px-6 font-sans">
      <div className="border border-[1.5px] border-[#fcb70a] rounded-md mx-auto w-full max-w-6xl my-10 px-6 py-4">

        <motion.div
          className="text-center mb-6"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-yellow-400">
            Top Achievers <span className="text-xl font-semibold text-white/80 mt-2"> at Effervescent Classes </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-yellow-400">{s.value}</p>
              <p className="text-sm text-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievers.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl border ${
                a.highlight ? "border-yellow-400 bg-yellow-100 text-black" : "border-yellow-400 text-black bg-amber-50"
              } p-5 shadow-lg hover:shadow-yellow-300 transition duration-300`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-bold">{a.name}</h4>
                {a.highlight && (
                  <span className="flex items-center gap-1 text-yellow-600 text-sm font-semibold bg-yellow-200 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4" /> Topper
                  </span>
                )}
              </div>
              <p className="text-red-600 font-bold text-md">Score: {a.score}</p>
              <p className="text-sm text-blue-900 font-semibold mt-1">College: {a.college}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6 pb-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-[#031b3c] cursor-pointer text-lg font-bold px-6 py-3 rounded-full shadow-lg"
            viewport={{ once: true }}
          >
            Become the Next Topper – Join Now!
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TopAchievers;
