import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from '../../api/api';
import ProductForm from '../../components/ProductForm';
import useNotificationStore from '../../hooks/useNotificationStore';
import useOneProduct from '../../hooks/useOneProduct';

const ProductUpdate = () => {
  const { id } = useParams();
  const { data: product } = useOneProduct(id);
  const initialValues = {
    name: product?.name || '',
    description: product?.description || '',
    basePrice: product?.basePrice || 0,
    enabled: product?.enabled || true,
    brandId: product?.brand?.id || '',
    categoryId: product?.subCategory?.category?.id || '',
    subCategoryId: product?.subCategory?.id || '',
  };

  const { notify } = useNotificationStore();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    updateProduct(id, values).then(() => {
      notify('Product updated successfully');
      navigate(`/seller/products/${id}`);
    });
  };

  return (
    <div className="flex-1">
      <div className="container mx-auto my-5">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Update Product
            </h2>
          </div>
          <div className='"mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <ProductForm
              enableReinitialize
              initialValues={initialValues}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
