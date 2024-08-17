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
    title: '고정 클라이언트',
    point: '20+',
    description: '강남병원 및 프랜차이즈 등 다수 고객유치',
    icon: Point01
  },
  {
    title: '마케팅 프로젝트',
    point: '200+',
    description: '200회 이상의 다수의 마케팅 프로젝트',
    icon: Point02
  },
  {
    title: '크몽 서비스',
    point: '4.9점',
    description: '고객님들께서 평가해주신 빛나는 점수',
    icon: Point03
  },
  ]
  return (
    <motion.section className="grid md:grid-cols-3 grid-cols-1 gap-12 md:gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {items.map((item, idx) => (<article key={`item-${idx}`} className="flex flex-row gap-4 md:flex-col md:justify-center md:items-center">
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
      </article>))}
    </motion.section>
  );
};
