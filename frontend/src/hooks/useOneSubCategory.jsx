import { useQuery } from '@tanstack/react-query';
import { getOneSubCategory } from '../api/api';

function useOneSubCategory(id) {
  return useQuery({
    queryKey: ['subcategories', 'fetch', id],
    queryFn: () => getOneSubCategory(id),
    initialData: { content: {} },
  });
}

export default useOneSubCategory;
