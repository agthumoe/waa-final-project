import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import useOrderBySeller from '../../hooks/useOrdersBySeller';
import useProfile from '../../hooks/useProfile';

const SellerOrderList = () => {
  const { data: profile } = useProfile();

  const { data: orders, isLoading } = useOrderBySeller(profile.id);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto p-4 mt-10 flex-1">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order List</h1>
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
          {_.map(orders?.content, (order) => (
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
                ${order.total}
              </td>
              <td className="text-center text-base/8 text-gray-900">
                <div className="flex items-center gap-x-4 justify-center">
                  <Link to={`/seller/orders/${order.id}`}>
                    <Button>View</Button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
          {_.isEmpty(orders?.content) && (
            <tr>
              <td colSpan="6" className="text-center text-gray-500 mt-5 pt-5">
                No orders yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SellerOrderList;
