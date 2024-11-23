import { useQuery } from '@tanstack/react-query';
import { getBrands } from '../api/api';

function useBrands(params) {
  return useQuery({
    queryKey: ['brands', 'fetch', params],
    queryFn: () => getBrands(params),
    initialData: { content: [], page: {} },
  });
}

export default useBrands;
