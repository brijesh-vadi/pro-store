'use server';

import { signIn, signOut } from '@/auth';
import { signInSchema } from '../validation';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export const signInWithCredentials = async (prevState: unknown, formData: FormData) => {
  try {
    const user = signInSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);
    return {
      success: true,
      message: 'Signed In Successfully.',
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: 'Invalid email or password.',
    };
  }
};

export const signOutUser = async () => {
  await signOut();
};
