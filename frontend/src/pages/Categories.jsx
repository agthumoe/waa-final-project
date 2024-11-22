import { Link } from 'react-router-dom';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import useCategories from '../hooks/useCategories';
import usePagination from '../hooks/usePagination';

const Categories = () => {
  const { page, size } = usePagination();

  const { data, isLoading } = useCategories({ page, size });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-10 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Product Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.content?.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`} // Link to category page
              className="border rounded-lg shadow-md overflow-hidden"
            >
              <Category {...category} />
            </Link>
          ))}
        </div>
        <Pagination totalPages={data?.page?.totalPages} />
      </div>
      <Footer />
    </>
  );
};

export default Categories;
