import { TrashIcon } from '@heroicons/react/16/solid';
import { EyeIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import ProductFilter from '../../components/ProductFilter';
import useProductFilter from '../../hooks/useProductFilter';
import useProfile from '../../hooks/useProfile';

const SellerProductList = () => {
  const { data: profile } = useProfile();
  const { data, isLoading, initialValues, handleSubmit } = useProductFilter(
    profile.id
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold mb-4">Product List</h2>
        <Link to="/seller/products/create">
          <Button>Add Product</Button>
        </Link>
      </div>
      <div className="flex">
        <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/5 p-4 bg-white border-r mb-9">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>
          <ProductFilter
            initialValues={initialValues}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="flex-1 px-5">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Brand
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Category
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Sub Category
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Base Price
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Stock
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {_.map(data?.content, (product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm">{product.name}</td>
                  <td className="px-4 py-2 text-sm">{product.brand?.name}</td>
                  <td className="px-4 py-2 text-sm">
                    {product.subCategory?.category?.name}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {product.subCategory?.name}
                  </td>
                  <td className="px-4 py-2 text-sm">${product.basePrice}</td>
                  <td className="px-4 py-2 text-sm">{product.stock || 0}</td>
                  <td className="px-4 py-2 text-sm space-x-1">
                    <div className="flex">
                      <button className="p-1 text-red-500 hover:text-red-600 hover:bg-red-100 rounded transition-colors duration-300">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                      <Link
                        to={`/seller/products/${product.id}/edit`}
                        className="p-1 text-blue-500 hover:text-blue-600 hover:bg-blue-100 rounded transition-colors duration-300"
                      >
                        <PencilSquareIcon className="h-4 w-4" />
                      </Link>
                      <Link
                        to={`/seller/products/${product.id}`}
                        className="p-1 text-green-500 hover:text-green-600 hover:bg-green-100 rounded transition-colors duration-300"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {_.isEmpty(data?.content) ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-2 text-sm text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
          <Pagination totalPages={data?.page.totalPages || 0} />
        </div>
      </div>
    </div>
  );
};

export default SellerProductList;
