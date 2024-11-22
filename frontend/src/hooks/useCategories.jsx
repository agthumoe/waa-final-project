import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/api';

function useCategories(params) {
  return useQuery({
    queryKey: ['categories', 'fetch', params],
    queryFn: () => getCategories(params),
    initialData: { content: [], page: {} },
  });
}

export default useCategories;
