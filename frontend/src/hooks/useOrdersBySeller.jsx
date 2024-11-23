import { useQuery } from '@tanstack/react-query';
import { getOrdersBySeller } from '../api/api';

function useOrderBySeller(sellerId) {
  return useQuery({
    queryKey: ['ordersBySeller', sellerId],
    queryFn: () => getOrdersBySeller(sellerId),
    initialData: { content: [], page: {} },
    enabled: !!sellerId,
  });
}

export default useOrderBySeller;
