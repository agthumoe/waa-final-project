import _ from 'lodash';
import PropTypes from 'prop-types';

const OrderItems = ({ items }) => {
  return (
    <div className="p-6 border-t">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Order Items</h3>
      {_.map(items, (item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-4"
        >
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-gray-800">
              {item.variant.productName}
            </h4>
            <p className="text-sm text-gray-600">Size: {item.variant.size}</p>
            <p className="text-sm text-gray-600">Color: {item.variant.color}</p>
            <p className="text-sm text-gray-600">
              Material: {item.variant.material}
            </p>
            <p className="text-sm text-gray-600">Model: {item.variant.model}</p>
            {item.variant.year && (
              <p className="text-sm text-gray-600">Year: {item.variant.year}</p>
            )}
            <p className="text-sm text-gray-600">Price: ${item.priceAtOrder}</p>
            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-800">
              ${item.priceAtOrder * item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

OrderItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.object,
      priceAtOrder: PropTypes.number,
      quantity: PropTypes.number,
    })
  ),
};

export default OrderItems;
