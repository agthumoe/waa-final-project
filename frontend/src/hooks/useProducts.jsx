import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/api';

function useProducts(params) {
  return useQuery({
    queryKey: ['products', 'fetch', params],
    queryFn: () => getProducts(params),
    initialData: { content: [], page: {} },
  });
}

export default useProducts;
