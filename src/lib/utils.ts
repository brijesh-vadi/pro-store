import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(val: T): T {
  return JSON.parse(JSON.stringify(val));
}

// formate product price
export const formatePrice = (val: number): string => {
  const [int, decimal] = val.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
};
