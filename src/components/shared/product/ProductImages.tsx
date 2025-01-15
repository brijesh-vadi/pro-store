'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className='space-y-4'>
        <Image
          src={images[currentIndex]}
          alt='product image'
          width={1000}
          height={1000}
          className='min-h-[300px] object-cover origin-center'
        />
        <div className='flex'>
          {images.map((image, index) => (
            <div
              key={image}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'border mr-2 cursor-pointer hover:border-zinc-600 rounded-md overflow-hidden',
                currentIndex === index && 'border-orange-500'
              )}>
              <Image src={image} alt='product image' width={100} height={100} className='' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
