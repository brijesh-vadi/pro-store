import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pro Store',
  description: 'Modern e-commerce platform built with next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='flex h-screen flex-col'>
        <Header />
        <main className='flex-1 wrapper'>{children}</main>
        <Footer />
      </div>
    </>
  );
}
