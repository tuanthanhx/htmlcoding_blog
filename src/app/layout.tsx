import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import { CMS_DOMAIN, CMS_TITLE, CMS_DESC, HOME_OG_IMAGE_URL } from '@/lib/constants';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import cn from 'classnames';

import '@/app/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(CMS_DOMAIN),
  title: CMS_TITLE,
  description: CMS_DESC,
  openGraph: {
    title: CMS_TITLE,
    description: CMS_DESC,
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
        <GoogleTagManager gtmId="GTM-WKVRNL3G" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/themes/prism-tomorrow.min.css" />
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#000" />
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
