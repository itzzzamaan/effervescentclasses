import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: "01.",
    title: "Accounts",
    description:
      "Accounting is the backbone of every successful business. Learn to analyze financial statements, track profits, and make smart business decisions. Our expert-led coaching simplifies complex concepts, ensuring you ace your exams with confidence. Enroll now and build a strong foundation for a thriving career!",
    image: "https://img.freepik.com/free-photo/young-teacher-telling-two-students-about-corporate-budgeting_1262-15357.jpg?t=st=1746206956~exp=1746210556~hmac=c164fdf95152ed02a7cd5c6f614f5ce69e8625b412e39f5806348da4c5a8b5d1&w=1380",
  },
  {
    id: "02.",
    title: "Business Studies",
    description:
      "Master management, marketing, and entrepreneurship to understand how businesses grow and thrive. Our expert coaching simplifies key concepts, helping you excel in exams and develop real-world business skills. Enroll now and take the first step toward becoming a future business leader!",
    image: "https://img.freepik.com/free-photo/beautiful-teacher-with-glasses-talking-her-online-students-giving-virtual-lesson-from-home_662251-2271.jpg?t=st=1746207061~exp=1746210661~hmac=558e5d5256d13c94a75fedc3874a8e7820229f8ef93859301a08a2b491ced1e5&w=1380",
  },
  {
    id: "03.",
    title: "English & Communication",
    description:
      "Enhance your language fluency and professional communication with our structured English program. From grammar fundamentals to spoken English and interview prep, we help you master the language that opens global opportunities.",
    image: "https://img.freepik.com/free-photo/college-girl-boy-studying-together_23-2149038395.jpg?t=st=1746207033~exp=1746210633~hmac=72c41860ef3550fadf5f5220ed09cb4f0339bf2d6fefe9e1d94dea41b54c69ae&w=1380",
  },
];

const CoursesSection = () => {
  return (
    <div className="bg-[#080F3B] -mt-5 text-white px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-yellow-400 font-extrabold text-center mb-8">Courses We Offer</h2>
        <div className="space-y-16">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6 md:gap-12`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
              />
              <div className="md:w-1/2">
                <h3 className="text-yellow-500 font-bold text-lg mb-1">{course.id}</h3>
                <h4 className="text-2xl font-bold mb-2">{course.title}</h4>
                <p className="text-gray-100 text-sm">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
