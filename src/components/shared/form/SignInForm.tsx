'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const SignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className='w-full'>
        {pending ? 'Signing In...' : 'Sign In'}
      </Button>
    );
  };

  return (
    <>
      <form action={action}>
        <input type='hidden' name='callbackUrl' value={callbackUrl} hidden />
        <div className='space-y-6'>
          <div>
            <Label>Email</Label>
            <Input
              name='email'
              id='email'
              type='email'
              placeholder='john@email.com'
              required
              autoComplete='email'
              defaultValue=''
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              name='password'
              id='password'
              type='password'
              placeholder='john@email.com'
              required
              autoComplete='password'
              defaultValue=''
            />
          </div>
          <div>
            <SignInButton />
          </div>
          {data && !data.success && <div className='text-destructive text-center'>{data.message}</div>}
          <div className='text-center text-muted-foreground text-sm'>
            Don&apos;t have an account?
            <Link href='/sign-up' target='_self' className='link'>
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
