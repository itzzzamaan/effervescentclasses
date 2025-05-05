import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f3a] text-white pt-10 pb-6 px-6 sm:px-10 border-t border-t-[1.5px] border-[#fcb70a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div className="md:col-span-2">
          <img
            src="https://web.effervescentclasses.com/assets/img/logo-full.png"
            alt="Effervescent Classes"
            className="w-52 mb-4"
          />
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Effervescent Classes is an initiative by CA CS Mayserah Mazhar ma'am to provide
            QUALITY education to CA, CS, and CMA aspirants, as they deserve.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="bg-yellow-400 text-black p-3 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-yellow-400 text-black p-3 rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-yellow-400 text-black p-3 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-yellow-400 text-black p-3 rounded-full">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2  text-sm">
            <li ><a className="text-gray-200 hover:text-yellow-400" href="#">› Home</a></li>
            <li><a className="text-gray-200 hover:text-yellow-400" href="#">› About Us</a></li>
            <li><a className="text-gray-200 hover:text-yellow-400" href="#">› Contact</a></li>
            <li><a className="text-gray-200 hover:text-yellow-400" href="#">› Books</a></li>
          </ul>
        </div>

        <div >
          <h3 className="text-lg font-bold mb-4">Important Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a className="text-gray-200 hover:text-yellow-400" href="#">› Privacy Policy</a></li>
            <li><a className="text-gray-200 hover:text-yellow-400" href="#">› Refund And Cancellation</a></li>
            <li><a className="text-gray-200 hover:text-yellow-400" href="#">› Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <span className="font-semibold">Address: </span>
              PNB Colony, Idgah Hills, Bhopal (M.P)
            </li>
            <li>
              <span className="font-semibold">Phone: </span>
              +91 9981559187
            </li>
            <li>
              <span className="font-semibold">Email:</span>
              effervescentclasses@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-t-[1.5px] border-[#fcb70a] pt-4 text-center text-sm text-gray-300">
        © 2025 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
