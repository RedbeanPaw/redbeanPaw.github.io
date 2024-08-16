import { useState, useCallback, useEffect, FC, useRef } from "react";
import Image from "next/image";
import { MidBg } from "@/constants/images";

export const MidBgSection: FC<any> = ({ main, sub }) => {
  return (
    <section className="w-full h-screen max-h-[500px] relative">
      <Image src={MidBg} fill objectFit="cover" alt="메인이미지"></Image>
      <article className="absolute text-white w-full py-24">
        <div className="m-auto md:max-w-[1200px] xl:px-0 px-8">
          <p className="text-gray-400 font-semibold">{sub}</p>
          <h2 className="text-2xl md:text-3xl whitespace-pre-wrap">{'저희는 서버와 원천기술을 보유한 실행사입니다.\n흔한 마케팅회사와 다릅니다.'}</h2>
          <div className="mt-4 md:text-lg text-sm flex flex-col gap-2">
            <p className="font-bold">
              마케팅의 본질은 신뢰입니다.
            </p>
            <p>
              저희는 고객과의 신뢰 관계를 최우선 가치로 삼고 있고,
              장기적인 관점에서 고객의 성장을 지원하는 진정한 파트너가
              되고자 합니다.
            </p>
            <p>
              투명하고 정직한 커뮤니케이션을 통해 고객과의 굳건한 유대감을 쌓아가며, 고객 개개인의 비즈니스 환경을 이해하고
              맞춤형 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
