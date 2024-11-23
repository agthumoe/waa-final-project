import moment from 'moment';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../api/api';
import useNotificationStore from '../hooks/useNotificationStore';
import Button from './Button';
import Loading from './Loading';
import VariantsTable from './VariantsTable';

const ProductDetails = ({ product, mutable = false }) => {
  const { notify } = useNotificationStore();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        notify('Product deleted successfully');
        navigate('/seller/products');
      })
      .catch((e) => {
        notify(
          e?.response?.data?.message || 'Failed to delete product',
          'error'
        );
      });
  };

  if (!product) {
    return <Loading />;
  }
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex">
        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
        {mutable && (
          <div className="ml-auto">
            <Link to={`/seller/products/${product.id}/edit`}>
              <Button>Edit</Button>
            </Link>
            <Button
              color="danger"
              className="ml-2"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </Button>
          </div>
        )}
      </div>

      <div className="flex mb-6">
        {product.file?.url && (
          <img
            src={product.file.url}
            alt={product.name}
            className="w-48 h-48 object-cover rounded-md shadow-lg mr-6"
          />
        )}

        <div className="flex-1">
          <p className="text-lg mb-4">{product.description}</p>
          <div className="text-2xl font-semibold text-green-500">
            ${product.basePrice}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {product.enabled ? 'Enabled' : 'Disabled'}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex space-x-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold">Category</h3>
              <p>{product.subCategory?.category?.name || 'N/A'}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Subcategory</h3>
              <p>{product.subCategory?.name || 'N/A'}</p>
            </div>
          </div>
          <div className="flex space-x-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold">Brand</h3>
              <p>{product.brand?.name || 'N/A'}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Seller</h3>
              <p>{product.seller?.name || 'N/A'}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-500 space-y-1">
          <p>
            <strong>Created By:</strong> {product.createdBy}
          </p>
          <p>
            <strong>Last Modified By</strong>: {product.lastModifiedBy}
          </p>
          <p>
            <strong>Created At:</strong>{' '}
            {moment(product.createdAt).format('MMM D YYYY')}
          </p>
          <p>
            <strong>Last Modified At:</strong>{' '}
            {moment(product.lastModifiedAt).format('MMM D YYYY')}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-end">
          <Link to={`/seller/products/${product.id}/variants/create`}>
            <Button>Add Variant</Button>
          </Link>
        </div>
        <VariantsTable variants={product.variants} mutable />
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object,
  mutable: PropTypes.bool,
};

export default ProductDetails;
