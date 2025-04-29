import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INCHEMCO - Thiết bị y tế & Hóa chất chuyên dụng | Đối tác chuyên nghiệp - Hợp tác vững bền",
  description: "INCHEMCO cung cấp thiết bị y tế cao cấp và hóa chất chuyên dụng tại Việt Nam. Phân phối độc quyền phế dung kế, thiết bị vật lý trị liệu và thiết bị xét nghiệm từ các thương hiệu uy tín toàn cầu.",
  keywords: "inchemco, thiết bị y tế, hóa chất, phế dung kế, BTL, vật lý trị liệu, thiết bị xét nghiệm, thiết bị y tế Việt Nam",
  authors: [{ name: "INCHEMCO" }],
  openGraph: {
    title: "INCHEMCO - Thiết bị y tế & Hóa chất chuyên dụng",
    description: "Đối tác chuyên nghiệp - Hợp tác vững bền",
    url: "https://inchemco.vn",
    siteName: "INCHEMCO",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INCHEMCO - Thiết bị y tế & Hóa chất chuyên dụng",
    description: "Đối tác chuyên nghiệp - Hợp tác vững bền",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
