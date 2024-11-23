import PropTypes from 'prop-types';
import Loading from './Loading';

const OrderDetails = ({ order }) => {
  if (!order) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Order Number:</h3>
        <p>{order.orderNumber}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">Ordered At:</h3>
        <p>{new Date(order.orderedAt).toLocaleString()}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">Status:</h3>
        <p
          className={`font-medium ${order.status === 'CANCELLED' ? 'text-red-500' : 'text-green-500'}`}
        >
          {order.status}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">Payment Method:</h3>
        <p>{order.paymentMethod}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">Total:</h3>
        <p>${order.total}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          Shipping Address:
        </h3>
        <p>{order.shippingAddress?.street}</p>
        <p>
          {order.shippingAddress?.city}, {order.shippingAddress?.state}{' '}
          {order.shippingAddress?.zip}
        </p>
        <p>{order.shippingAddress?.country}</p>
      </div>
    </>
  );
};

OrderDetails.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderDetails;
