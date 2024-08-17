"use client"
import { useEffect, useState } from "react";
import { Progress } from '@chakra-ui/react'
import { Footer } from "@/components/nav/Footer";
import { KakaoButton } from "@/components/KakaoButton";

export default function PageLayout({ children }: any) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let start: any = null;
        let elapsedTime = 0;

        const animate = (timestamp: any) => {
            if (!start) start = timestamp;
            elapsedTime = timestamp - start;

            if (elapsedTime < 1500) {
                requestAnimationFrame(animate);
            } else {
                setIsLoading(false);
            }
        };

        requestAnimationFrame(animate);
    }, []);
    return isLoading ?
        <main className="w-screen h-screen flex flex-col justify-center bg-main items-center">
            <p className="mb-4 text-slate-400">LOADING</p>
            <Progress width={200} height={'8px'} colorScheme="main" size={'md'} isIndeterminate />
        </main> : <>
            {children}
            <KakaoButton />
            <Footer />
        </>
}