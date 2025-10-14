import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/ui/Navbar";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";
import "./lenis.css";

export const metadata: Metadata = {
  title: "Chanyu Lee (Ray) | UX/UI Designer Portfolio",
  description: "사용자 중심의 경험을 디자인하는 UX/UI 디자이너 이찬유(Ray)의 포트폴리오입니다. 한동대학교 재학 중.",
  keywords: ["UX/UI Designer", "Chanyu Lee", "Ray", "User Experience", "Interface Design", "Portfolio", "Handong Global University"],
  authors: [{ name: "Chanyu Lee (Ray)" }],
  openGraph: {
    title: "Chanyu Lee (Ray) | UX/UI Designer Portfolio",
    description: "사용자 중심의 경험을 디자인하는 UX/UI 디자이너 이찬유(Ray)의 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
          <ThemeProvider>
            <SmoothScrollProvider />
            <Navbar />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
