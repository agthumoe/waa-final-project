import { useQuery } from '@tanstack/react-query';
import { getSubCategoriesByCategory } from '../api/api';

function useSubCategoriesByCategory(categoryId, params) {
  return useQuery({
    queryKey: ['subcategories', categoryId, params],
    queryFn: () => getSubCategoriesByCategory(categoryId, params),
    initialData: { content: [], page: {} },
    enabled: !!categoryId,
  });
}

export default useSubCategoriesByCategory;
