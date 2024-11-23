import { useQuery } from '@tanstack/react-query';
import { getOrderCountBySeller } from '../api/api';

function useOrderCount(sellerId) {
  return useQuery({
    queryKey: ['orderCount', sellerId],
    queryFn: () => getOrderCountBySeller(sellerId),
    initialData: { count: 0 },
    enabled: !!sellerId,
  });
}

export default useOrderCount;
