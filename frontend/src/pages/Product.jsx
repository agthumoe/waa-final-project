import { useQueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import { useCallback, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../api/api';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import ProductPrice from '../components/ProductPrice';
import QuantitySelectorModal from '../components/QuantitySelectorModal';
import Ratings from '../components/Ratings';
import useCart from '../hooks/useCart';
import useOneProduct from '../hooks/useOneProduct';
import useProductRating from '../hooks/useProductRatings';
import useProfile from '../hooks/useProfile';

const Product = () => {
  const params = useParams();
  const { isAuthenticated, data: profile } = useProfile();
  const { data: cart } = useCart();
  const { data: product, isLoading } = useOneProduct(params.id);
  const [selectedVariant, setSelectedVariant] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const { data: ratings } = useProductRating(params.id);

  const handleAddToCart = (quantity) => {
    if (availableItem) {
      const payload = {
        variantId: availableItem.id,
        quantity,
        cartId: cart.id,
      };
      addToCart(payload).then(() => {
        queryClient.invalidateQueries(['cart', 'fetch']);
        setIsModalOpen(false);
      });
    }
  };

  const availableItem = useMemo(
    () => _.find(product?.variants, _.omitBy(selectedVariant, _.isNil)),
    [product, selectedVariant]
  );

  const groupOptions = useCallback((variants, key) => {
    const options = variants.map((variant) => variant[key]).filter(Boolean);
    return [...new Set(options)];
  }, []);

  if (isLoading && !product) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 flex-1 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <img
              src={product?.file || 'https://via.placeholder.com/500'}
              alt={product?.name}
              className="w-80 h-80 object-cover rounded-lg shadow-md"
            />
            <div className="flex flex-col mt-4 space-y-1">
              <p className="text-sm text-gray-500">
                <strong>Brand:</strong> {product?.brand?.name}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Category:</strong>{' '}
                <Badge color="green">
                  {product?.subCategory?.category?.name || ''}
                </Badge>
              </p>
              <p className="text-sm text-gray-500">
                <strong>Sub-category:</strong>{' '}
                <Badge color="red">{product?.subCategory?.name || ''}</Badge>
              </p>
              <p className="text-sm text-gray-500">
                <strong>Seller:</strong> {product?.seller?.name}
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-3xl font-bold text-gray-800">
              {product?.name}
            </h2>
            <p className="text-lg text-gray-600 mt-2">{product?.description}</p>
            <ProductPrice
              basePrice={product?.basePrice}
              variant={availableItem}
            />

            <div className="mt-4">
              <h4 className="text-lg font-semibold mt-10">
                Available Options:
              </h4>
              <div className="mt-2">
                {product?.variants && (
                  <div className="space-y-4">
                    {groupOptions(product.variants, 'color').length > 0 && (
                      <div>
                        <h5 className="font-semibold">Color:</h5>
                        <div className="flex gap-2">
                          {groupOptions(product.variants, 'color').map(
                            (color) => {
                              return (
                                <Button
                                  key={color}
                                  className={`mr-2 mb-2 !py-0.5 text-sm border !text-black hover:bg-blue-500 transition-all duration-300 
                                  ${color === selectedVariant?.color ? 'bg-green-100' : 'bg-white'} 
                                  ${color === selectedVariant?.color ? 'scale-105' : 'scale-100'}`}
                                  onClick={() =>
                                    setSelectedVariant((prev) => ({
                                      ...prev,
                                      color,
                                    }))
                                  }
                                >
                                  {color}
                                </Button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                    {groupOptions(product.variants, 'model').length > 0 && (
                      <div>
                        <h5 className="font-semibold">Model:</h5>
                        <div className="flex gap-2">
                          {groupOptions(product.variants, 'model').map(
                            (model) => {
                              return (
                                <Button
                                  key={model}
                                  className={`mr-2 mb-2 !py-0.5 text-sm border rounded-full !text-black hover:bg-blue-500 transition-all duration-300 
                                  ${model === selectedVariant?.model ? 'bg-yellow-100' : 'bg-white'} 
                                  ${model === selectedVariant?.model ? 'scale-105' : 'scale-100'}`}
                                  onClick={() =>
                                    setSelectedVariant((prev) => ({
                                      ...prev,
                                      model,
                                    }))
                                  }
                                >
                                  {model}
                                </Button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                    {groupOptions(product.variants, 'material').length > 0 && (
                      <div>
                        <h5 className="font-semibold">Material:</h5>
                        <div className="flex gap-2">
                          {groupOptions(product.variants, 'material').map(
                            (material) => {
                              return (
                                <Button
                                  key={material}
                                  className={`mr-2 mb-2 !py-0.5 text-sm border hover:bg-blue-500 !text-black transition-all duration-300 
                                  ${material === selectedVariant?.material ? 'bg-blue-200 scale-105' : 'bg-white'}`}
                                  onClick={() =>
                                    setSelectedVariant((prev) => ({
                                      ...prev,
                                      material,
                                    }))
                                  }
                                >
                                  {material}
                                </Button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                    {groupOptions(product.variants, 'size').length > 0 && (
                      <div>
                        <h5 className="font-semibold">Size:</h5>
                        <div className="flex gap-2">
                          {groupOptions(product.variants, 'size').map(
                            (size) => {
                              return (
                                <Button
                                  key={size}
                                  className={`mr-2 mb-2 !py-0.5 text-sm hover:bg-blue-500 border rounded-full !text-black transition-all duration-300 
                                  ${size === selectedVariant?.size ? 'bg-orange-300' : 'bg-white'}`}
                                  onClick={() =>
                                    setSelectedVariant((prev) => ({
                                      ...prev,
                                      size,
                                    }))
                                  }
                                >
                                  {size}
                                </Button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                    {groupOptions(product.variants, 'year').length > 0 && (
                      <div>
                        <h5 className="font-semibold">Year:</h5>
                        <div className="flex gap-2">
                          {groupOptions(product.variants, 'year').map(
                            (year) => {
                              return (
                                <Button
                                  key={year}
                                  className={`mr-2 mb-2 !py-0.5 text-sm hover:bg-blue-500 border rounded-full !text-black hover:text-white transition-all duration-300 
                                  ${year === selectedVariant?.year ? 'bg-purple-600' : 'bg-white hover:bg-gray-500'} 
                                  ${year === selectedVariant?.year ? 'scale-105' : 'scale-100'}`}
                                  onClick={() =>
                                    setSelectedVariant((prev) => ({
                                      ...prev,
                                      year,
                                    }))
                                  }
                                >
                                  {year}
                                </Button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="flex space-x-2 items-center justify-center">
                <Link to={`/buyer/products/${product?.id}/reviews`}>
                  <Button color="danger">Give Review</Button>
                </Link>
                <Button
                  color="primary"
                  onClick={() => setIsModalOpen(true)}
                  disabled={
                    !isAuthenticated ||
                    !availableItem ||
                    !profile?.roles.includes('ROLE_BUYER')
                  }
                >
                  Add to Cart
                </Button>
              </div>
              {!_.isEmpty(selectedVariant) && !isAuthenticated && (
                <div className="mt-2 text-red-500">
                  Please login to add item to the cart
                </div>
              )}
            </div>
            {!_.isEmpty(selectedVariant) && isAuthenticated && (
              <div className="mt-4 text-green-500">
                <p>Selected Options: {_.map(selectedVariant).join(' - ')}</p>
              </div>
            )}
          </div>
        </div>
        <Ratings ratings={ratings} />
      </div>
      <Footer />
      <QuantitySelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddToCart}
      />
    </>
  );
};

export default Product;
