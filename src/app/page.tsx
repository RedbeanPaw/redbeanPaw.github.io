"use client"
import { MainBgSection } from "@/components/main/MainBgSection";
import { MidBgSection } from "@/components/main/MidBgSection";
import { ProductsPC } from "@/components/main/ProductsPC";
import { PortfolioSection } from "@/components/main/PortfolioSection";
import { FooterBgSection } from "@/components/main/FooterBgSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductsMobile } from "@/components/main/ProductsMobile";
import { useMediaQuery } from '@chakra-ui/react'


export default function Home() {
  const [isMobile] = useMediaQuery('(max-width: 720px)')

  return (
    <main className="flex w-full min-h-screen flex-col">
      <MainBgSection />
      <PortfolioSection />
      <MidBgSection />
      {
        isMobile ? <ProductsMobile /> : <ProductsPC />
      }
      <FooterBgSection />
    </main>
  );
}
