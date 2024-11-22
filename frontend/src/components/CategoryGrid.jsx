import _ from 'lodash';
import { Link } from 'react-router-dom';
import useCategories from '../hooks/useCategories';
import Button from './Button';
import Category from './Category';
import Loading from './Loading';

const CategoryGrid = () => {
  const { data, isLoading } = useCategories({ page: 0, size: 4 });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {_.map(data?.content, (category) => (
            <Link to={`/products?categoryId=${category.id}`} key={category.id}>
              <Category {...category} />
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/categories">
            <Button variant="link">View All Categories</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
