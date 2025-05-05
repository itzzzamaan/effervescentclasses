import React from "react";
import { motion } from "framer-motion";

const EnquiryForm = () => {
  return (
    <div className="bg-[#080F3B] py-2 md:-mt-0 -mt-5 pb-8 px-4 sm:px-6 lg:px-20" id="enquiry">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
            <h1 className="md:text-5xl text-3xl text-yellow-400 font-bold mb-4 ">Have Enquiry? Fill It -</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Your Child Deserves The Best Coaching For Commerce!
          </h2>
          <h3 className="text-md md:text-lg text-white mb-4">Effervescent Classes is an initiative by CA CS Mayserah Mazhar ma'am to provide QUALITY education to CA, CS, and CMA aspirants, as they deserve.</h3>
          <p className="text-2xl font-bold text-white mb-2">
            Join 1000+ Students Transforming Their Future!
          </p>
          <p className="text-2xl font-bold text-red-600 mb-2">
            Limited Spots Available!
          </p>
          <p className="text-sm italic text-gray-100">
            (No Cost. No Obligation. Just Results!)
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-6 rounded-md shadow-md w-full space-y-4"
        >
          <div>
            <label className="block font-semibold text-sm mb-1">Name *</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-sm mb-1">Phone *</label>
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-sm mb-1">Class *</label>
            <select className="w-full border rounded-md p-2" required>
              <option>Select Class</option>
              <option>11th Commerce</option>
              <option>12th Commerce</option>
              <option>CA Foundation</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-bold py-3 rounded-md hover:bg-yellow-500 cursor-pointer transition duration-200"
          >
            Book Your Free Trial Class Now!
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default EnquiryForm;
