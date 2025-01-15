import { Product } from '@/types';
import ProductCard from './ProductCard';

const ProductList = ({ products, title }: { products: Product[]; title?: string }) => {
  return (
    <>
      <div className='my-10'>
        <h2 className='font-medium text-2xl mb-4'>{title}</h2>
        {products.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((product: Product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        ) : (
          <div>
            <p>No Products found.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
