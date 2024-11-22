import { useQuery } from '@tanstack/react-query';
import { getUserAddresses } from '../api/api';

function useUserAddresses(userId) {
  return useQuery({
    queryKey: ['userAddresses', userId],
    queryFn: () => getUserAddresses(userId),
    initialData: [],
    enabled: !!userId,
  });
}

export default useUserAddresses;
