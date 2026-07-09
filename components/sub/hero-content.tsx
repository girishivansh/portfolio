"use client";

import { SparklesIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-24 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start items-center md:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] bg-[#030014]/60"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h2 className="Welcome-text text-[13px]">
            Aspiring Software Engineer
          </h2>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto drop-shadow-[0_2px_10px_rgba(0,0,0,1)]"
        >
          <span>
            Full Stack Developer,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
              C++ & DSA
            </span>{" "}
            Enthusiast.
          </span>
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] drop-shadow-[0_2px_10px_rgba(0,0,0,1)]"
        >
          I am a Computer Science & Data Analytics student at IIT Patna. I am passionate about building modern web applications, solving complex problems using Data Structures & Algorithms, and exploring Artificial Intelligence.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          onClick={() => setIsModalOpen(true)}
          className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg text-lg font-semibold w-full max-w-[250px]"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>

    {/* About Me Modal */}
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-[#030014]/90 border border-[#7042f88b] shadow-[0_0_40px_rgba(112,66,248,0.2)] rounded-2xl p-8 md:p-12 text-gray-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              About Me
            </h2>
            
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-300">
              <p>
                Hello! I&apos;m Shivansh Giri, a Computer Science & Data Analytics student at IIT Patna with a strong passion for software development, problem solving, and emerging technologies.
              </p>
              <p>
                My journey in technology started with curiosity about how websites and applications work behind the scenes. Over time, that curiosity evolved into a deep interest in Full Stack Development, where I enjoy transforming ideas into functional and user-friendly digital products.
              </p>
              <p>
                I actively work on improving my skills in C++, Data Structures & Algorithms, React.js, Next.js, Node.js, and modern web technologies. Alongside web development, I am highly interested in Artificial Intelligence and its ability to solve real-world challenges through intelligent systems.
              </p>
              <p>
                I believe in learning by building. Every project I create helps me understand software architecture, system design, user experience, and modern development workflows. My goal is to become a highly skilled Software Engineer capable of building impactful products that solve meaningful problems.
              </p>
              <p>
                When I&apos;m not coding, I enjoy exploring new technologies, participating in hackathons, contributing to personal projects, and continuously expanding my knowledge of software engineering and AI.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};
