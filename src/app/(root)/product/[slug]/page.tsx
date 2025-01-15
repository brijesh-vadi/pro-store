import ProductImages from '@/components/shared/product/ProductImages';
import ProductPrice from '@/components/shared/product/ProductPrice';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';

const ProductDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <section className='grid sm:grid-cols-1 md:grid-cols-5'>
        {/* images column */}
        <div className='col-span-2'>
          <ProductImages images={product.images} />
        </div>
        <div className='col-span-2 p-5'>
          <div className='flex flex-col gap-6'>
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className='h3-bold'>{product.name}</h1>
            <p>
              {product.rating} of {product.numReviews} Reviews
            </p>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
              <ProductPrice
                value={Number(product.price)}
                className='w-24 rounded-full bg-green-200 text-green-700 px-5 py-2'
              />
            </div>
            <div className='mt-10'>
              <p className='font-semibold'>Description</p>
              <p>{product.description}</p>
            </div>
          </div>

          {/* actions */}
        </div>
        <div className='col-span-1'>
          <Card>
            <CardContent className='p-4 flex flex-col gap-3'>
              <div className='mb-2 flex justify-between items-center'>
                <div>Price</div>
                <div>
                  <ProductPrice value={Number(product.price)} />
                </div>
              </div>
              <div className='mb-2 flex justify-between items-center'>
                <div>Status</div>
                {product.stock > 0 ? (
                  <Badge variant='outline'>In Stock</Badge>
                ) : (
                  <Badge variant='destructive'>Out Of Stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className='flex-center'>
                  <Button className='w-full'>Add to card</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
