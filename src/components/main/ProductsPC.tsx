"use client"
import { useState, useCallback, useEffect, FC, useRef } from "react";
import Image from "next/image";
import { ProBlog, ProDang, ProGoogle, ProInsta, ProPlace, ProImage01, ProImage02, ProImage03, ProImage04, ProImage05 } from "@/constants/images";
import { SectionTitle } from "../SectionTitle";
import { ProductCard } from "../ProductCard";
import { productList } from "@/constants/biz";

export const ProductsPC: FC<any> = ({ main, sub }) => {
  return (
    <section className="w-full md:max-w-[1200px] xl:px-0 px-8 m-auto py-28">
      <div className="mb-8">
        <SectionTitle main={'왜 올리코퍼레이션일까요?'} sub={'SERVICE'} />
        <p className="break-keep">저희는 대표님께 다음 4가지를 제공해드릴 수 있습니다.</p>
      </div>
      <article className="grid grid-cols-2 gap-4">
        {
          productList.map((pro, idx) => (
            <ProductCard key={`product-${idx}`} {...pro} />
          ))
        }

      </article>
    </section>
  );
};
