import type { Metadata } from "next";
import "./(site)/(home)/globals.css";
import Provider from "@/util/Providers";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Wether",
  description: "Wether",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
