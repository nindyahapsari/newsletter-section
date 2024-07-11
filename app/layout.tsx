import type { Metadata } from "next";
import { Noto_Sans, Roboto } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
const roboto = Roboto({ weight: ["100"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newsletter Section",
  description:
    "Newsletter section using next js, react js with tailwind and daisy ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
