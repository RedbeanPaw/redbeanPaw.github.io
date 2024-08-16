"use client"
import { useState, useCallback, useEffect, FC, useRef } from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FooterBg } from "@/constants/images";

export const FooterBgSection: FC<any> = ({ main, sub }) => {
  return (
    <section className="w-full h-screen max-h-[400px] relative">
      <Image src={FooterBg} fill objectFit="cover" alt="푸터이미지"></Image>
      <article className="w-full h-full flex flex-col justify-center items-center absolute">
        <h2 className="!text-white md:max-xl:text-4xl text-3xl font-thin mb-2 pretendard">올리코퍼레이션과 함께</h2>
        <h2 className="!text-white md:max-xl:text-4xl text-3xl font-extrabold pretendard">비즈니스를 확 끌어 올려보세요</h2>
        <div className="mt-12">
          <Link href={'/contact'}>
            <Button colorScheme="main" width={300} height={'60px'}>
              <h3 className="text-xl font-bold tracking-tight	">
                지금 바로 문의하기
              </h3>
            </Button>
          </Link>
        </div>
      </article>
    </section>
  );
};
