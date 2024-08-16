"use client"
import { useState, useCallback, useEffect, FC, useRef } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import { SectionTitle } from "../SectionTitle";
import { productList } from "@/constants/biz";

export const ProductsMobile: FC<any> = ({ main, sub }) => {
  return (
    <section className="w-full md:max-xl:max-w-[1200px] md:max-xl:p-0 px-8 m-auto py-28">
      <div className="mb-8">
        <SectionTitle main={'왜 올리코퍼레이션일까요?'} sub={'SERVICE'} />
        <p className="whitespace-pre-wrap break-keep">{'저희는 대표님께 다음 4가지를\n제공해드릴 수 있습니다.'}</p>
      </div>
      <Accordion defaultIndex={[0]} allowMultiple>
        {
          productList.map((product) => (
            <AccordionItem key={`accordion-item-${product.title}`}>
              <AccordionButton className="!px-0 !py-4 justify-between">
                <div className="flex gap-2 mr-1">
                  <Image src={product.icon} alt={product.title} width={40} height={40} />
                  <div className="flex flex-col items-start text-left">
                    <h3 className="font-bold">{product.sub}</h3>
                    <p className="text-gray-600 text-sm !font-normal break-keep">{product.title}</p>
                  </div>
                </div>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} className="bg-slate-200">
                <div className="py-4">
                  <p className="whitespace-pre-wrap text-sm text-slate-600">{product.description}</p>
                </div>
              </AccordionPanel>
            </AccordionItem>
          ))
        }
      </Accordion>
    </section>
  );
};
