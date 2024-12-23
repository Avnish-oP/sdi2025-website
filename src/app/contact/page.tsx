"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contactUsform"; // Assuming you have a ContactForm component

const ContactUs = () => {
  return (
    <div className="bg-white text-indigo-500 py-20 px-4 gilda-display-regular">
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
              <strong>Address:</strong> USDI, GGSIPU-EDC, Surajmal vihar, Delhi
            </p>
            <p className="mb-4">
              <strong>SPOC:</strong> Dr Nikhilesh Sharma
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> 9560434006
            </p>
            <p className="mb-4">
              <strong>Email:</strong> Sdi2025@ipu.ac.in
            </p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8280278268708!2d77.29840397550196!3d28.664867475647174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2f69c2d037%3A0xd1e30b93ac412f25!2sUniversity%20School%20of%20Automation%20and%20Robotics%20(USAR)!5e0!3m2!1sen!2sin!4v1734937673615!5m2!1sen!2sin"
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
