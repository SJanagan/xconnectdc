import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ContactPopup from '@/components/ContactPopup';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'XCONNECT Datacenters | Enterprise Data Center & Network Infrastructure',
    template: '%s | XCONNECT Datacenters',
  },
  description:
    'Powering India\'s Digital Future with Secure, Scalable Data Centers. Enterprise-grade colocation, cloud, OPGW connectivity, and managed infrastructure services.',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <ContactPopup />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
      </body>
    </html>
  );
}
