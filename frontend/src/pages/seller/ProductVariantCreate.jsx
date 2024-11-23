import { useNavigate, useParams } from 'react-router-dom';
import { addVariantToProduct } from '../../api/api';
import VariantForm from '../../components/VariantForm';
import useNotificationStore from '../../hooks/useNotificationStore';

const initialValues = {
  size: '',
  color: '',
  material: '',
  model: '',
  year: '',
  stock: 0,
  price: 0,
};

const ProductVariantCreate = () => {
  const { id } = useParams();
  const { notify } = useNotificationStore();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    addVariantToProduct(id, values).then(() => {
      notify('Variant added successfully');
      navigate(`/seller/products/${id}`);
    });
  };

  return (
    <div className="flex-1">
      <div className="container mx-auto my-5">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Add a new variant to the product
            </h2>
          </div>
          <div className='"mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <VariantForm
              initialValues={initialValues}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVariantCreate;
