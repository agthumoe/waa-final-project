import _ from 'lodash';
import { useSearchParams } from 'react-router-dom';

function usePagination(fields = []) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 0);
  const size = Number(searchParams.get('size') || 10);
  const params = {};
  _.each(fields, (field) => {
    params[field] = searchParams.get(field);
  });
  return { ...params, page, size, searchParams, setSearchParams };
}

export default usePagination;
