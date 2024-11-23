import { useQueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { updateOrder } from '../../api/api';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import useNotificationStore from '../../hooks/useNotificationStore';
import useOrdersByBuyer from '../../hooks/useOrdersByBuyer';
import useProfile from '../../hooks/useProfile';

const UserOrderList = () => {
  const { data: profile, isLoading } = useProfile();
  const { data, isLoading: isOrderLoading } = useOrdersByBuyer(profile?.id);
  const { notify } = useNotificationStore();

  const queryClient = useQueryClient();

  const handleCancel = (orderId) => {
    updateOrder(orderId, { status: 'CANCELLED' }).then(() => {
      queryClient.invalidateQueries('ordersByBuyer');
      notify('Order cancelled successfully');
    });
  };

  if (isLoading || isOrderLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4 mt-10 flex-1">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Product Categories
      </h1>
      <div className="flex flex-col">
        <div className="flex justify-end space-x-2">
          <Link to="/buyer/cart">
            <Button>Go to Cart</Button>
          </Link>
          <Link to="/products">
            <Button variant="link">Buy More</Button>
          </Link>
        </div>
        <table className="table-auto w-full">
          <thead className="border border-b-2 border-t-0 border-l-0 border-r-0 border-gray-400">
            <tr className="text-left text-lg/9 font-semibold text-gray-900 ">
              <th className="text-center">Order Number</th>
              <th className="text-center">Order At</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Status</th>
              <th className="text-center">Total</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {_.map(data?.content, (order) => (
              <tr
                key={order.id}
                className="border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-400 "
              >
                <td className="text-center text-base/8 text-gray-900">
                  {order.orderNumber}
                </td>
                <td className="text-center text-base/8 text-gray-900">
                  {moment(order.orderAt).format('MMM DD YYYY')}
                </td>
                <td className="text-center text-base/8 text-gray-900">
                  {order.paymentMethod}
                </td>
                <td className="text-center text-base/8 text-gray-900">
                  {order.status}
                </td>
                <td className="text-center text-base/8 text-gray-900">
                  <div className="flex items-center gap-x-4 justify-center">
                    <Button
                      color="danger"
                      disabled={order.status !== 'PENDING'}
                      onClick={() => handleCancel(order.id)}
                    >
                      Cancel
                    </Button>
                    <Link to={`/buyer/orders/${order.id}`}>
                      <Button>View</Button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            {_.isEmpty(data?.content) && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-base/8 text-gray-900"
                >
                  No orders yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrderList;
