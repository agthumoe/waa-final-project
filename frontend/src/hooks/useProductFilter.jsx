import _ from 'lodash';
import usePagination from './usePagination';
import useProducts from './useProducts';

function useProductFilter(sellerId) {
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
    'sellerId',
  ]);

  const { data, ...rest } = useProducts({
    page,
    size,
    name,
    minPrice,
    maxPrice,
    categoryId,
    subCategoryId,
    brandId,
    sellerId,
  });

  const handleSubmit = (values) => {
    setSearchParams({
      ..._.omitBy({ ...values, sellerId }, _.isEmpty),
      page: 0,
      size,
    });
  };

  const initialValues = {
    name: name || '',
    minPrice: minPrice ? Number(minPrice) : '',
    maxPrice: minPrice ? Number(maxPrice) : '',
    categoryId: categoryId || '',
    subCategoryId: subCategoryId || '',
    brandId: brandId || '',
    sellerId: sellerId || '',
  };

  return {
    data,
    handleSubmit,
    initialValues,
    ...rest,
  };
}

export default useProductFilter;
