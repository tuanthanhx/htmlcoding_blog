import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import { CMS_TITLE, CMS_DESC, HOME_OG_IMAGE_URL } from '@/lib/constants';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import cn from 'classnames';

import '@/app/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: CMS_TITLE,
  description: CMS_DESC,
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/themes/prism-tomorrow.min.css" />
      </head>
      <body className={cn(poppins.className, 'bg-white')}>
        <div>
          <Header />
          <div className="min-h-[calc(100vh_-_var(--header-height)_-_var(--footer-height))]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
