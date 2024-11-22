import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../api/api';

function useAllUsers(params) {
  return useQuery({
    queryKey: ['users', 'fetch', params],
    queryFn: () => getAllUsers(params),
    initialData: { content: [], page: {} },
  });
}

export default useAllUsers;
