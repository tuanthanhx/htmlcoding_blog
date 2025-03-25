import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import cn from "classnames";

import "@/app/styles/globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    display: "swap"
 });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/themes/prism-tomorrow.min.css"
        />

      </head>
      <body
        className={cn(poppins.className, "bg-white")}
      >
        <div>
          <Header />
          {/* <div className="min-h-screen">{children}</div> */}
          <div>{children}</div>
          <Footer />
        </div>
        
      </body>
    </html>
  );
}
