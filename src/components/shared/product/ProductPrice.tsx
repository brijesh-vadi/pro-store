import { cn } from '@/lib/utils';

const ProductPrice = ({ value, className }: { value: number; className?: string }) => {
  const stringValue = value.toFixed(2);

  const [intValues, floatValues] = stringValue.split('.');
  return (
    <>
      <p className={cn('text-2xl', className)}>
        <span className='text-xs align-super'>$</span>
        {intValues}
        <span className='text-xs align-super'>.{floatValues}</span>
      </p>
    </>
  );
};

export default ProductPrice;
