"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Journey = () => {
  return (
    <section className="flex flex-col relative items-center justify-center min-h-[70vh] w-full h-full py-20" id="journey">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[30px] md:text-[40px] font-medium text-center text-gray-200 mb-12"
      >
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Journey
        </span>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 px-5 md:px-10 max-w-6xl w-full z-20">
        {/* Card 1: Education */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="flex-1 p-8 rounded-2xl border border-[#7042f88b] bg-[#030014]/60 backdrop-blur-md shadow-[0_0_30px_rgba(112,66,248,0.15)] hover:shadow-[0_0_40px_rgba(112,66,248,0.3)] transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
              🎓
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold text-sm md:text-base">
                Indian Institute of Technology (IIT), Patna
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Currently pursuing a degree in Computer Science & Data Analytics, maintaining a strong academic record with a 9.31 CGPA in the first year. Passionate about software development, data analytics, and problem-solving, while building a solid foundation in core computer science concepts, software engineering, and data structures & algorithms.
          </p>
        </motion.div>

        {/* Card 2: Problem Solving */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
          className="flex-1 p-8 rounded-2xl border border-[#7042f88b] bg-[#030014]/60 backdrop-blur-md shadow-[0_0_30px_rgba(112,66,248,0.15)] hover:shadow-[0_0_40px_rgba(112,66,248,0.3)] transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
              💻
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Problem Solving</h3>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold text-sm md:text-base">
                C++ & DSA Enthusiast
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Highly passionate about solving complex algorithmic challenges. I regularly practice Data 
            Structures & Algorithms to hone my critical thinking and write highly optimized, scalable code.
          </p>
        </motion.div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50%] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-[100px] -z-10 rounded-full" />
    </section>
  );
};
