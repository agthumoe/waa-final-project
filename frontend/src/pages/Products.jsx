import { Form, Formik } from 'formik';
import _ from 'lodash';
import BrandSelect from '../components/BrandSelect';
import Button from '../components/Button';
import CategorySelect from '../components/CategorySelect';
import Field from '../components/Field';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Product from '../components/Product';
import SubCategorySelect from '../components/SubCategorySelect';
import usePagination from '../hooks/usePagination';
import useProducts from '../hooks/useProducts';

const Products = () => {
  const {
    page,
    size,
    name,
    minPrice,
    maxPrice,
    categoryId,
    subCategoryId,
    brandId,
    setSearchParams,
  } = usePagination([
    'name',
    'minPrice',
    'maxPrice',
    'categoryId',
    'subCategoryId',
    'brandId',
  ]);

  const { data, isLoading } = useProducts({
    page,
    size,
    name,
    minPrice,
    maxPrice,
    categoryId,
    subCategoryId,
    brandId,
  });

  const handleSubmit = (values) => {
    setSearchParams({ ..._.omitBy(values, _.isEmpty), page: 0, size });
  };

  const initialValues = {
    name: name || '',
    minPrice: minPrice ? Number(minPrice) : '',
    maxPrice: minPrice ? Number(maxPrice) : '',
    categoryId: categoryId || '',
    subCategoryId: subCategoryId || '',
    brandId: brandId || '',
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-10 flex-1 flex space-x-5">
        <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/5 p-4 bg-white border-r mb-9">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values }) => (
              <Form className="space-y-6">
                <Field name="name" placeholder="Search by name" />
                <Field name="minPrice" placeholder="Min price" type="number" />
                <Field name="maxPrice" placeholder="Max price" type="number" />
                <CategorySelect name="categoryId" />
                <SubCategorySelect
                  name="subCategoryId"
                  categoryId={values?.categoryId}
                />
                <BrandSelect name="brandId" />
                <Button block type="submit">
                  Search
                </Button>
              </Form>
            )}
          </Formik>
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
