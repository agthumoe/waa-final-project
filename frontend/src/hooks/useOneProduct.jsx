import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../api/api';

function useOneProduct(id) {
  return useQuery({
    queryKey: ['product', 'fetch', id],
    queryFn: () => getProduct(id),
    initialData: null,
    enabled: !!id,
  });
}

export default useOneProduct;
