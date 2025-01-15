import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { DarkModeToggle } from './DarkModeToggle';

const Menu = () => {
  return (
    <>
      <div className='flex justify-end gap-3'>
        <nav className='hidden md:flex w-full max-w-xs gap-5'>
          <DarkModeToggle />
          <Button asChild variant='ghost'></Button>
          <Button asChild>
            <Link href='/sign-in'>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </nav>
        <nav className='md:hidden'>
          <Sheet>
            <SheetTrigger className='align-middle'>
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className='flex flex-col items-start'>
              <SheetTitle>Menu</SheetTitle>
              <DarkModeToggle />
              <Button asChild variant='ghost'>
                <Link href='/cart'>
                  <ShoppingCart /> Cart
                </Link>
              </Button>
              <Button asChild variant='ghost'>
                <Link href='/sign-in'>
                  <UserIcon /> Sing In
                </Link>
              </Button>
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;
