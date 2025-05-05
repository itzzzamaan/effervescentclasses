import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const parentsList = [
  "Low Confidence & Anxiety: Your child feels overwhelmed and struggles to stay motivated.",
  "Lack of Concept Clarity: Your Child memorize without understanding and leading to poor retention.",
  "Personalized Attention: We help them to identify and address specific learning gaps or challenges that learner face.",
  "Unstructured Exam Preparation: Without the right strategies, scoring 90%+ achieve your dreams with Effervecient classes.",
];

const studentsList = [
  "Accounts Feels Too Tough: Confusing concepts make it hard to understand and apply.",
  "Exam Stress: You feel nervous before exams because you’re unsure how to answer for top marks.",
  "Memorizing Without Understanding: Rote learning isn’t working, and your scores aren’t improving.",
  "No One to Clear Your Doubts: In big classrooms, your questions go unanswered, leaving gaps in your learning.",
];

const reviews = [
  {
    name: "Muskan",
    rating: 5,
    text: "One of the best institute for commerce. Highly glad to learn from such a qualified teacher.",
  },
  {
    name: "Mokshi Tikoo",
    rating: 5,
    text: "Provides quality courses with excellent personal attention. Highly recommend this coaching centre.",
  },
  {
    name: "Keshav",
    rating: 4.5,
    text: "Best tuition I’ve ever seen. Surin sir is very kind and jokes a lot. Hats off!",
  },
  {
    name: "Vishal Singh",
    rating: 4.8,
    text: "One of the best institutes of commerce in Jammu. Premium level education.",
  },
  {
    name: "Aarushi Sharma",
    rating: 4,
    text: "The environment here is so positive and motivating. I owe my academic success to Effervescent Classes.",
  },
  {
    name: "Raghav Mehta",
    rating: 4.5,
    text: "Concepts were taught so clearly that I actually started enjoying the subject. Great faculty and approach!",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStar className="opacity-50" />}
      <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>
    </div>
  );
};

const OurExperties = () => {
  const [activeTab, setActiveTab] = useState("parents");

  return (
    <section className="bg-[#080F3B] md:-mt-8 -mt-12 py-6 px-4 lg:px-20">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border border-[1.5px] border-[#fcb70a] rounded-md mx-auto w-full max-w-6xl my-8 px-6 py-4"
        >
          <h2 className="text-2xl text-center mb-8 lg:text-3xl font-bold text-white">
            Struggling With Low Scores? Here’s What’s Holding You Back!
          </h2>

          <div className="flex flex-wrap justify-center mb-6 space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab("parents")}
              className={`px-5 py-2 cursor-pointer rounded font-semibold transition ${
                activeTab === "parents" ? "bg-[#fcb70a] text-white" : "bg-gray-200"
              }`}
            >
              For Parents
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`px-5 py-2 cursor-pointer rounded font-semibold transition ${
                activeTab === "students" ? "bg-blue-900 text-white" : "bg-gray-200"
              }`}
            >
              For Students
            </button>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            {(activeTab === "parents" ? parentsList : studentsList).map((point, idx) => (
              <motion.div
                key={idx}
                className="flex items-start mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-xl font-bold text-[#fcb70a] mr-2">{idx + 1}.</span>
                <p className="text-white/80 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="border border-[1.5px] border-[#fcb70a] rounded-md mx-auto w-full max-w-6xl my-10 px-6 py-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-center text-2xl lg:text-3xl font-semibold text-white mb-8">
          Trusted By Parents. Loved By Students. Proven By Results.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="bg-[#FEF9C2] cursor-pointer hover:bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{review.name}</h4>
              <StarRating rating={review.rating} />
              <p className="text-gray-700 mt-3 text-sm">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurExperties;
