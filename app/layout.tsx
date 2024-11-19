import type { Metadata } from "next";
import "./globals.css";
import { sfProRegular } from "./fonts";

export const metadata: Metadata = {
  title: "UverUs: Financial Infrastructure for African Businesses",
  description: "UverUs offers businesses in Africa a comprehensive payment system and essential tools to effectively engage with their customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfProRegular.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
