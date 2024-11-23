import { useQuery } from '@tanstack/react-query';
import { getHealth } from '../api/api';

function useHealth() {
  return useQuery({
    queryKey: ['health'],
    queryFn: getHealth,
    initialData: {},
  });
}

export default useHealth;
