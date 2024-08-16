import { useState, useCallback, useEffect, FC, useRef } from "react";
import { Kakao } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

export const KakaoButton: FC<any> = ({ main, sub }) => {
  return (
    <Link className="fixed cursor-pointer shadow-lg right-[5%] rounded-[50%] bottom-[5%]" href={'https://pf.kakao.com/_txowRG'} target="_blank">
      <Image src={Kakao} alt="카카오채널" />
    </Link>
  );
};
