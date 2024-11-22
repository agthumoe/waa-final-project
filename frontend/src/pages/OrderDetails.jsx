import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Button from '../components/Button';
import Loading from '../components/Loading';
import OrderItems from '../components/OrderItems';
import useOneOrder from '../hooks/useOneOrder';

const OrderDetails = () => {
  const { id } = useParams();

  const { order, items, isLoading } = useOneOrder(id);

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  console.log(order, items);

  const handleCancelOrder = () => {
    // Logic to cancel the order (e.g., API call)
    alert('Order cancelled');
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
        </div>
        <div className="p-6 space-y-4" ref={contentRef}>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Order Number:
            </h3>
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
            <h3 className="text-lg font-semibold text-gray-800">
              Payment Method:
            </h3>
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
          <OrderItems items={items} />
          <div className="flex justify-end gap-4 mt-4 print-none">
            <Link to={`/order/${order.id}/review`}>
              <Button color="primary">Review</Button>
            </Link>
            <Button color="primary" onClick={reactToPrintFn}>
              Print Order
            </Button>
            {order.status !== 'CANCELLED' && (
              <Button color="danger" onClick={handleCancelOrder}>
                Cancel Order
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
