import { useQuery } from '@tanstack/react-query';
import { getMetrics } from '../api/api';

function useMetrics() {
  return useQuery({
    queryKey: ['metrics'],
    queryFn: getMetrics,
    initialData: [],
  });
}

export default useMetrics;
