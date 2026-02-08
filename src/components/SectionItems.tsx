import { useState, useCallback, useEffect, FC, useRef } from "react";
import Image from "next/image";
import {
  Point01,
  Point02,
  Point03
} from '../constants/images'
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from "@/constants/motion";

export const SectionItems: FC<any> = ({ main, sub }) => {
  const items = [{
    title: '요트다이스 점수 계산기',
    point: '',
    description: '편리하게 요트다이스 점수를 계산해주는 앱',
    link: 'https://yacht-dice-calc.netlify.app',
    icon: Point01
  },
  {
    title: '마작 점수 계산기',
    point: '',
    description: '간편한 마작 점수 계산기',
    link: 'https://mahjongcalculator.netlify.app',
    icon: Point02
  },
  {
    title: '금방 외우는 단어장',
    point: '',
    description: 'COMMING SOON',
    link: '',
    icon: Point03
  },
  ]
  return (
    <motion.section className="grid md:grid-cols-3 grid-cols-1 gap-12 md:gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {items.map((item, idx) => (<a key={`item-${idx}`} {...(item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {})} className="flex flex-row gap-4 md:flex-col md:justify-center md:items-center">
        <motion.div variants={itemVariants}>
          <Image src={item.icon} alt="ddd" width={80} height={80} />
        </motion.div>
        <div className="mt-3 flex flex-col justify-center md:items-center items-start">
          <motion.div variants={itemVariants} className="flex gap-1">
            <h2 className="text-gray-900 text-xl">{item.title}</h2>
            <h2 className="text-main text-xl font-extrabold">{item.point}</h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-gray-400 font-semibold text-sm">{item.description}</motion.p>
        </div>
      </a>))}
    </motion.section>
  );
};
