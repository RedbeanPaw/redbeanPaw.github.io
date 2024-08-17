import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/constants/images";
import { ContactForm } from "@/components/Form";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:px-8 px-0 md:bg-main">
      <div className="md:p-16 py-16 px-4 bg-white">
        <section className="w-full max-w-[600px] m-auto pb-16">
          <Link href={'/'} className="mb-8">
            <Image src={Logo} alt="로고" />
          </Link>
          <h2 className="mt-4 text-3xl text-[#21366E]">마케팅이 필요하신 대표님!</h2>
          <h2 className="text-3xl text-main">편하게 문의주세요</h2>
          <p className="whitespace-pre-wrap py-6">{'상담내용을 상세히 작성 해주실 수록\n저희가 더욱 원활히 솔루션을 제공해드릴 수 있습니다.'}</p>
        </section>
        <section className="w-full max-w-[600px] m-auto">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
