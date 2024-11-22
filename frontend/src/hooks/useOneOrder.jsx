import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';
import { getOrderDetails } from '../api/api';

function useOneOrder(id) {
  const { data, ...rest } = useQuery({
    queryKey: ['orders', id],
    queryFn: () => getOrderDetails(id),
    initialData: {},
    enabled: !!id,
  });
  if (_.isEmpty(data)) {
    return { order: {}, items: [], ...rest };
  }
  const [order, items] = data;
  return { order, items, ...rest };
}

export default useOneOrder;
