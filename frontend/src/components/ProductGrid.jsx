import _ from 'lodash';
import useProducts from '../hooks/useProducts';
import Button from './Button';
import Loading from './Loading';
import Product from './Product';

const ProductGrid = () => {
  const { data, isLoading } = useProducts({ size: 4, page: 0, minStock: 1 });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {_.map(data, (product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="link" to="/products">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
