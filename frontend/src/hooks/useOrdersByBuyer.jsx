import { useQuery } from '@tanstack/react-query';
import { getOrdersByBuyer } from '../api/api';

function useOrdersByBuyer(buyerId) {
  return useQuery({
    queryKey: ['orders', buyerId],
    queryFn: () => getOrdersByBuyer(buyerId),
    initialData: { content: [], page: {} },
    enabled: !!buyerId,
  });
}

export default useOrdersByBuyer;
