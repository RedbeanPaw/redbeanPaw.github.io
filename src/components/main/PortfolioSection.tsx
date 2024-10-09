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
          <SectionTitle main={'우리의 작업들'} sub={'PORTFOLIO'} description={''} />
        </div>
        <div className="pt-8 md:max-xl:pt-16">
          <SectionItems />
        </div>
      </section>
    </Element>
  );
};
