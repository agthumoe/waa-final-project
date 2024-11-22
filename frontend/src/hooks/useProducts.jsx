import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/api';

function useProducts(params) {
  const { data, ...rest } = useQuery({
    queryKey: ['products', 'fetch', params],
    queryFn: () => getProducts(params),
    initialData: { content: [] },
  });
  return { data: data?.content, page: data?.page, ...rest };
}

export default useProducts;
