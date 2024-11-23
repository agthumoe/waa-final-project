import useProfile from '../hooks/useProfile';
import Loading from './Loading';
import useOrderCount from './useOrderCount';

const OrderCountBySeller = () => {
  const { data: profile, isLoading } = useProfile();
  const { data: orderCount, isLoading: isLoadingOrderCount } = useOrderCount(
    profile?.id
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-xs">
      <h3 className="text-xl font-semibold mb-4">Order Count</h3>
      {isLoading || isLoadingOrderCount ? (
        <Loading />
      ) : (
        <div className={`text-lg font-bold text-green-500`}>
          {orderCount?.count}
        </div>
      )}
    </div>
  );
};

export default OrderCountBySeller;
