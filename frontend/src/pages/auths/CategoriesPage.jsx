import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import CategoriesTable from '../../components/CategoriesTable';
import Loading from '../../components/Loading';
import useCategories from '../../hooks/useCategories';
import usePagination from '../../hooks/usePagination';
import useProfile from '../../hooks/useProfile';

const CategoriesPage = () => {
  const { page, size } = usePagination();
  const { data, isLoading } = useCategories({ page, size });
  const { data: profile } = useProfile();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Categories List</h2>
      <div className="flex justify-end">
        <Link to="/admin/categories/create">
          <Button className="mb-4">Create Category</Button>
        </Link>
      </div>
      <CategoriesTable
        mutable={profile?.roles?.includes('ROLE_ADMIN')}
        categories={data?.content}
        totalPages={Number(data?.page.totalPages)}
      />
    </div>
  );
};

export default CategoriesPage;
