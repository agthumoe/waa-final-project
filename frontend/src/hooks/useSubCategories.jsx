import { useQuery } from '@tanstack/react-query';
import { getSubCategories } from '../api/api';

function useSubCategories(params) {
  return useQuery({
    queryKey: ['subcategories', params],
    queryFn: () => getSubCategories(params),
    initialData: { content: [], page: {} },
  });
}

export default useSubCategories;
