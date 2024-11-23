import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import SubCategoriesTable from '../../components/SubCategoriesTable';
import usePagination from '../../hooks/usePagination';
import useProfile from '../../hooks/useProfile';
import useSubCategories from '../../hooks/useSubCategories';

const SubCategoriesPage = () => {
  const { page, size } = usePagination();
  const { data, isLoading } = useSubCategories({ page, size });
  const { data: profile } = useProfile();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sub Categories List</h2>
      <div className="flex justify-end">
        <Link to="/admin/subcategories/create">
          <Button className="mb-4">Create Sub Category</Button>
        </Link>
      </div>
      <SubCategoriesTable
        mutable={profile?.roles?.includes('ROLE_ADMIN')}
        subCategories={data?.content}
        totalPages={Number(data?.page.totalPages)}
      />
    </div>
  );
};

export default SubCategoriesPage;
