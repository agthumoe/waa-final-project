import { useQuery } from '@tanstack/react-query';
import { getOneAddress } from '../api/api';

function useOneAddress(id) {
  return useQuery({
    queryKey: ['oneAddress', id],
    queryFn: () => getOneAddress(id),
    initialData: {},
    enabled: !!id,
  });
}

export default useOneAddress;
