import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

export default function Home() {
  return (
    <html>
      <head>
        <script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6172208143098274"
          crossOrigin="anonymous"></script>
      </head>
      <body>
        <main className="h-full w-full">
          <div className="flex flex-col gap-20">
            <Hero />
            <Skills />
            <Encryption />
            <Projects />
          </div>
          <Analytics />
        </main>

      </body>
    </html>
  );
}
