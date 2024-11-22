import _ from 'lodash';
import PropTypes from 'prop-types';

const ProductPrice = ({ basePrice, variant }) => {
  const hasDiscount = !_.isEmpty(variant?.discount);
  const stock = variant?.stock || 0;

  return (
    <div className="mt-3 flex justify-start items-center space-x-2">
      <p className={`text-xl font-semibold text-gray-900`}>
        {hasDiscount ? (
          <>
            <span className="line-through text-gray-600">
              ${variant?.price || basePrice}
            </span>
            <span className="ml-2">
              $
              {(
                (variant?.price || basePrice) *
                (1 - variant?.discount?.percentage / 100)
              ).toFixed(2)}
            </span>
          </>
        ) : (
          `$${variant?.price || basePrice}`
        )}
      </p>
      {stock > 0 ? (
        <p className="text-sm text-green-600">In Stock</p>
      ) : (
        <p className="text-sm text-red-600">Out of Stock</p>
      )}
    </div>
  );
};

ProductPrice.propTypes = {
  basePrice: PropTypes.number,
  variant: PropTypes.shape({
    price: PropTypes.number,
    discount: PropTypes.shape({
      percentage: PropTypes.number,
    }),
    stock: PropTypes.number,
  }),
};

export default ProductPrice;
