import type { Metadata } from "next";
import "./globals.css";
import { sfProRegular } from "./fonts";
import ScrollProvider from "./contexts/scroll-context";
import { Navbar } from "./components/navbar";
import { Newsletter } from "./components/newsletter";
import { Footer } from "./components/footer";

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
        <ScrollProvider>
          <Navbar />
          <main>
            {children}
            <Newsletter />
          </main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
