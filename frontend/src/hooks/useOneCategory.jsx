import { useQuery } from '@tanstack/react-query';
import { getOneCategory } from '../api/api';

function useOneCategory(id) {
  return useQuery({
    queryKey: ['categories', 'fetch', id],
    queryFn: () => getOneCategory(id),
    initialData: { content: {} },
  });
}

export default useOneCategory;
