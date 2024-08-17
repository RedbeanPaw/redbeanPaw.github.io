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
    return <>
        {children}
        <KakaoButton />
        <Footer />
    </>
}