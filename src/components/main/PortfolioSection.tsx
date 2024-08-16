"use client"
import { useState, useCallback, useEffect, FC, useRef } from "react";
import { SectionTitle } from "../SectionTitle";
import { SectionItems } from "@/components/SectionItems";
import { Element } from "react-scroll";
export const PortfolioSection: FC<any> = ({ main, sub }) => {
  return (
    <Element name="portfolio">
      <section id="portfolio" className="w-full md:max-w-[1200px] m-auto py-28 xl:px-0 px-8">
        <div className="mb-8">
          <SectionTitle main={'올리코퍼레이션은'} sub={'PORTFOLIO'} />
          <p>마케팅 에이전시 올리코퍼레이션은 아래와 같은 성과를 가지고 있습니다.</p>
        </div>
        <div className="pt-8 md:max-xl:pt-16">
          <SectionItems />
        </div>
      </section>
    </Element>
  );
};
