import { auth } from '@/auth';
import SignUpForm from '@/components/shared/form/SignUpForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'ProStore Sign Up Page',
};

const SignUpPage = async ({ searchParams }: { searchParams: Promise<{ callbackUrl: string }> }) => {
  const callbackUrl = (await searchParams).callbackUrl;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }
  return (
    <>
      <div className='w-full max-w-md mx-auto'>
        <Card>
          <CardHeader className='space-y-4'>
            <Link href='/' className='flex-center'>
              <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} width={100} height={100} priority />
            </Link>
            <CardTitle className='text-center'>Sign Up</CardTitle>
            <CardDescription className='text-center'>Create account.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <SignUpForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignUpPage;
