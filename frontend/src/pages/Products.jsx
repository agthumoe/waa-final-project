import _ from 'lodash';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Product from '../components/Product';
import ProductFilter from '../components/ProductFilter';
import useProductFilter from '../hooks/useProductFilter';

const Products = () => {
  const { data, isLoading, initialValues, handleSubmit } = useProductFilter();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-10 flex-1 flex space-x-5">
        <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/5 p-4 bg-white border-r mb-9">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>
          <ProductFilter
            initialValues={initialValues}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="w-full sm:w-3/4 md:w-3/4 lg:w-4/5 p-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {_.map(data?.content, (product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
          <Pagination totalPages={data?.page?.totalPages || 0} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
