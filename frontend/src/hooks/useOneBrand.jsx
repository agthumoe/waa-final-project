import { useQuery } from '@tanstack/react-query';
import { getOneBrand } from '../api/api';

function useOneBrand(id) {
  return useQuery({
    queryKey: ['brands', 'fetch', id],
    queryFn: () => getOneBrand(id),
    initialData: { content: {} },
  });
}

export default useOneBrand;
