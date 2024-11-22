import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../api/api';
import ProductForm from '../../components/ProductForm';
import useNotificationStore from '../../hooks/useNotificationStore';

const initialValues = {
  name: '',
  description: '',
  basePrice: 0,
  enabled: true,
  brandId: '',
  categoryId: '',
  subCategoryId: '',
};

const ProductCreate = () => {
  const { notify } = useNotificationStore();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    createProduct(values).then((data) => {
      notify('Product created successfully');
      navigate(`/seller/products/${data.id}`);
    });
  };

  return (
    <div className="flex-1">
      <div className="container mx-auto my-5">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Create a new product
            </h2>
          </div>
          <div className='"mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <ProductForm
              initialValues={initialValues}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
