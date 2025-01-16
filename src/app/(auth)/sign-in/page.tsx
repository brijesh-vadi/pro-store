import { auth } from '@/auth';
import SignInForm from '@/components/shared/form/SignInForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'ProStore Sign In Page',
};

const SignInPage = async ({ searchParams }: { searchParams: Promise<{ callbackUrl: string }> }) => {
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
            <CardTitle className='text-center'>Sign In</CardTitle>
            <CardDescription className='text-center'>Enter details to continue.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignInPage;
