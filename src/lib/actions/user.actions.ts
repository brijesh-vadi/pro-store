'use server';

import { signIn, signOut } from '@/auth';
import { hashSync } from 'bcrypt-ts-edge';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { prisma } from '../../../db/prisma';

export const signInWithCredentials = async (userData: { email: string; password: string }) => {
  try {
    await signIn('credentials', userData);
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

export const signUpUser = async (userData: { email: string; password: string; name: string }) => {
  try {
    const plainPassword = userData.password;

    userData.password = hashSync(userData.password, 10);

    await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      },
    });

    await signIn('credentials', {
      email: userData.email,
      password: plainPassword,
    });

    return {
      success: true,
      message: 'User registered successfully.',
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: 'Failed to register user.',
    };
  }
};
