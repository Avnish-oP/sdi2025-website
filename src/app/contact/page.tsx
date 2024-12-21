"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contactUsform"; // Assuming you have a ContactForm component
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-white text-[#C8A26B] py-20 px-4 gilda-display-regular">
      <div className="container mx-auto">
        <motion.h1
          className="text-5xl  text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch with Us
        </motion.h1>
        <motion.p
          className="text-center text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We would love to hear from you. Whether you have a question about our
          products, services, or anything else, our team is ready to answer all
          your questions.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-2 md:p-10 rounded-lg "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-3xl antialiased text-center  mb-4">Contact Us</h2>
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gray-100 p-2 md:p-10 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h2 className="text-3xl  mb-4">Contact Information</h2>
            <p className="mb-4">
              <strong>Address:</strong> 123 Indiana Street, Merch City, IM 45678
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@indianamerchandise.com
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A26B] hover:text-[#C8A26B]"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A26B] hover:text-[#C8A26B]"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="mailto:info@indianamerchandise.com"
                className="text-[#C8A26B] hover:text-[#C8A26B]"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2 className="text-3xl  text-center mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.9984109919214!2d-122.08385118423891!3d37.3860512798291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0b5a51b219d%3A0x37ab8e57c1ad7e28!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617134171264!5m2!1sen!2sus"
            width="100%"
            height="450"
            className="rounded-lg shadow-lg"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
