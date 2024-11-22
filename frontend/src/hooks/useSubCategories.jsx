import { useQuery } from '@tanstack/react-query';
import { getSubCategories } from '../api/api';

function useSubCategories(categoryId, params) {
  return useQuery({
    queryKey: ['subcategories', categoryId, params],
    queryFn: () => getSubCategories(categoryId, params),
    initialData: { content: [], page: {} },
    enabled: !!categoryId,
  });
}

export default useSubCategories;
