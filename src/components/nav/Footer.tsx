import { useState, useCallback, useEffect, FC, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoGrey } from "@/constants/images";
import { contact } from "@/constants/contact";

export const Footer: FC<any> = ({ main, sub }) => {
  return (
    <section className="w-full bg-[#1E293B] text-[#64748B] text-sm flex flex-col">
      <article className="w-full flex flex-col gap-1 md:max-w-[1200px] xl:px-0 px-8 m-auto py-28">
        <Image src={LogoGrey} className="mb-4" width={100} height={30} alt="올리코퍼레이션로고" />
        <div className="flex gap-1 items-center">
          <p className="font-bold">{contact.company}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p>사업자 등록번호:</p>
          <p>{contact.bizNum}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p>주소:</p>
          <p>{contact.address}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p>이메일:</p>
          <Link className="text-inherit underline" href={`mailto:${contact.email}`} >
            {contact.email}</Link>
        </div>
      </article>
    </section>
  );
};
