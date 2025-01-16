import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pro Store',
  description: 'Modern e-commerce platform built with next.js',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='flex-center min-h-screen w-full'>{children}</div>
    </>
  );
}
