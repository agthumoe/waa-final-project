import _ from 'lodash';
import { Link } from 'react-router-dom';
import useCategories from '../hooks/useCategories';
import Button from './Button';
import Loading from './Loading';

const defaultImage = 'https://via.placeholder.com/300x200';

const CategoryGrid = () => {
  const { data, isLoading } = useCategories(0, 4);

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
          {_.map(data, (category) => (
            <div
              key={category.id}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={category.file || defaultImage}
                alt={category.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  {category.name}
                </p>
              </div>
            </div>
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
