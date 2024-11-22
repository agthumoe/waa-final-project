import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/api';

function useCategories(page = 0, size = 10) {
  const { data, ...rest } = useQuery({
    queryKey: ['categories', 'fetch', page, size],
    queryFn: () => getCategories({ page, size }),
    initialData: { content: [] },
  });
  return { data: data?.content, page: data?.page, ...rest };
}

export default useCategories;
