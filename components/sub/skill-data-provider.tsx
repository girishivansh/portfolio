"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
  icon?: IconType;
  color?: string;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
  icon: Icon,
  color,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      {src ? (
        <Image src={`/skills/${src}`} width={width} height={height} alt={name} />
      ) : Icon ? (
        <Icon style={{ width, height, color: color || "white" }} />
      ) : (
        <div
          className="flex items-center justify-center text-white font-bold text-center bg-white/10 rounded-full border border-white/20"
          style={{ width, height, fontSize: '12px' }}
        >
          {name}
        </div>
      )}
    </motion.div>
  );
};
