import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/api';

function useCart() {
  return useQuery({
    queryKey: ['cart', 'fetch'],
    queryFn: getCart,
  });
}

export default useCart;
