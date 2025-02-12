import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { AppProgressBar } from "next-app-progress-bar";

import { Navbar, Footer } from "./components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adham Emam - Full-Stack Web Developer",
  description:
    "Explore my portfolio to discover my web development projects, blog posts on technology, and learn more about my skills and experience as a full-stack developer. Technologies: React, Next.js, Django, Python, and more.",
  keywords:
    "Full-stack web developer, React, Next.js, Django, Python, JavaScript, Portfolio, Blog, Projects, About Me",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta rel="image" content="/hero.webp" />
      </Head>
      <body className={poppins.className}>
        <AppProgressBar color={"#fc575c"} showSpinner={false} />
        <div className="gradient"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
