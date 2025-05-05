import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import faqImg from "../assets/faqImg.jpg";

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-gray-300  rounded-lg mb-3 overflow-hidden">
    <button
      onClick={onClick}
      className="w-full flex justify-between cursor-pointer items-center px-4 py-3 bg-yellow-200  transition duration-200"
    >
      <span className="font-medium text-left">{question}</span>
      <FaChevronDown
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
    {isOpen && (
      <div className="bg-white px-4 py-3 text-sm text-gray-700">
        {answer}
      </div>
    )}
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const caFaqs = [
    {
      question: "What is the eligibility for the CA Foundation Course?",
      answer: "You must pass 12th grade (or equivalent) from a recognized board.",
    },
    {
      question: "Does Effervescent Classes cover all ICAI syllabus topics?",
      answer: "Yes, we ensure 100% syllabus coverage with focus on exam-oriented teaching.",
    },
    {
        question: "Can I pursue CS along with my graduation?",
        answer: "Yes, many students pursue CS alongside their graduation as it is flexible.",
      },
      {
        question: "Are mock tests included in the CS program?",
        answer: "Absolutely! We offer full-length mock tests and performance evaluations.",
      },

      {
        question: "How often are CMA classes conducted?",
        answer: "We have daily classes with weekend doubt sessions for CMA students.",
      },
      {
        question: "Is there a mentorship program for CMA aspirants?",
        answer: "Yes, one-on-one mentorship is available to guide students throughout.",
      },
  ];

//   const csFaqs = [
   
//   ];

//   const cmaFaqs = [
   
//   ];

  const renderFaqSection = (title, faqs, startIndex) => (
    <div className="md:mb-8 mb-4 ">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      {faqs.map((faq, i) => (
        <FaqItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === startIndex + i}
          onClick={() => toggleFaq(startIndex + i)}
        />
      ))}
    </div>
  );

  return (
    <section className="w-full py-4 md:pb-11 pb-8 px-4 sm:px-6 lg:px-10 bg-[#080F3B] ">

    <div className=" max-w-6xl mx-auto border border-[1.5px] py-4 px-4 sm:px-6 lg:px-10 border-[#fcb70a] rounded-xl ">
    <h1 className="text-3xl font-bold text-center text-white mb-10">
        Frequently Asked Questions ?
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-white flex flex-col justify-center">
          <img
            src={faqImg}
            alt="FAQ Illustration"
            className="w-full max-w-xl md:h-90 h-65 rounded-xl mx-auto md:mx-0 mb-6 md:mb-0"
          />
          <p className="text-sm leading-relaxed mt-4 text-center md:text-left">
            Still have questions about CA, CS, or CMA? Our team is here to help
            you at every stage of your journey. Explore the answers or reach out
            to us!
          </p>
        </div>

        <div>
          {renderFaqSection(" All About CA Aspirants And CMA Aspirants", caFaqs, 0)}
          {/* {renderFaqSection("CS Aspirants", csFaqs, caFaqs.length)}
          {renderFaqSection("CMA Aspirants", cmaFaqs, caFaqs.length + csFaqs.length)} */}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Faq;
