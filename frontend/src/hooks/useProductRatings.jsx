import { useQuery } from '@tanstack/react-query';
import { getRatings } from '../api/api';

function useProductRating(productId) {
  return useQuery({
    queryKey: ['productRatings', productId],
    queryFn: () => getRatings(productId),
    initialData: [],
    enabled: !!productId,
  });
}

export default useProductRating;
