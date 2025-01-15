import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} width={48} height={48} priority />
        <div className='p-6 rounded-lg shadow-md text-center w-1/3'>
          <h1 className='text-3xl mb-4 font-bold'>Not Found</h1>
          <p className='text-destructive'>Could not find requested page.</p>
          <Button asChild variant='outline' className='mt-4 ml-2'>
            <Link href='/'>Back to home</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
