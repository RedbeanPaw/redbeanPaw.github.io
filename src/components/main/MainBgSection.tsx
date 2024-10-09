"use client"
import { useState, useCallback, useEffect, FC, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { MainBg } from "@/constants/images";
import { LogoWhite, ArrowUp, ArrowDown } from "@/constants/images";
import { Link as ScrollLink } from "react-scroll"
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from "@/constants/motion";

export const MainBgSection: FC<any> = () => {

  return (
    <section className="w-full h-screen max-h-[800px] relative m-auto">
      <Image src={MainBg} fill objectFit="cover" alt="메인이미지"></Image>
      <motion.article className="absolute left-0 right-0 text-white w-full h-full flex flex-col justify-center xl:px-0 max-w-none sm:max-w-[1200px] p-8 m-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* <motion.div variants={itemVariants}>
          <Image src={LogoWhite} alt="Red Bean Paw" width={150} height={44} />
        </motion.div> */}
        <motion.p className="md:text-xl text-lg my-4" variants={itemVariants}>자그마한 고양이 발자국처럼</motion.p>
        <motion.h2 className="md:text-7xl sm:text-5xl text-4xl" variants={itemVariants}>세상에 {"'조금'"}</motion.h2>
        <motion.h2 className="md:text-7xl sm:text-5xl text-4xl" variants={itemVariants}>도움되는 앱을 만듭니다.</motion.h2>

        <motion.article className="absolute bottom-10 text-white w-full flex justify-center" variants={itemVariants}>
          <ScrollLink activeClass="active" to="portfolio" spy={true} smooth={true} duration={800} className="border border-white rounded-[50%] w-12 h-12 flex justify-center items-center cursor-pointer">
            <Image className="icon" src={ArrowDown} alt="화살표 아래" width={20} height={20}></Image>
          </ScrollLink>
        </ motion.article>
      </ motion.article>
    </ section>
  );
};
