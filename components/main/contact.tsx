"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/lib/motion";

export const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 pb-40"
      id="contact"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
        className="flex flex-col items-center justify-center w-full"
      >
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[2px] w-12 bg-purple-500/50"></div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 tracking-widest text-sm font-semibold uppercase">
            Get In Touch
          </p>
          <div className="h-[2px] w-12 bg-cyan-500/50"></div>
        </div>

        {/* Huge Title */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[50px] md:text-[80px] font-black leading-none tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
              Let&apos;s Build
            </span>
            <span className="text-purple-500 text-[30px] md:text-[50px] ml-2">
              •
            </span>
          </h1>
          <h1 className="text-[50px] md:text-[80px] font-black text-white leading-none tracking-tighter uppercase mt-2">
            Something Great.
          </h1>
        </div>

        {/* Subtitles */}
        <div className="flex flex-col items-center justify-center mt-8 text-gray-400 text-base md:text-lg text-center max-w-[600px] px-4 font-medium">
          <p>Open to internships, collaborations, and full-time roles at top MNCs.</p>
          <p className="mt-2">Have an idea or an opportunity? Let&apos;s talk.</p>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:skgiri21102008@gmail.com"
          className="mt-10 py-3 px-8 button-primary text-center text-white cursor-pointer rounded-full min-w-[200px] font-semibold transition-transform hover:scale-105 shadow-lg shadow-purple-500/20"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};
