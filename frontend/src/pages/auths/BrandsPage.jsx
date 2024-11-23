import { Link } from 'react-router-dom';
import BrandsTable from '../../components/BrandsTable';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import useBrands from '../../hooks/useBrands';
import usePagination from '../../hooks/usePagination';
import useProfile from '../../hooks/useProfile';

const BrandsPage = () => {
  const { page, size } = usePagination();
  const { data, isLoading } = useBrands({ page, size });
  const { data: profile } = useProfile();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Brands List</h2>
      <div className="flex justify-end">
        <Link to="/admin/brands/create">
          <Button className="mb-4">Create Brand</Button>
        </Link>
      </div>
      <BrandsTable
        mutable={profile?.roles?.includes('ROLE_ADMIN')}
        brands={data?.content}
        totalPages={Number(data?.page.totalPages)}
      />
    </div>
  );
};

export default BrandsPage;
