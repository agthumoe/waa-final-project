import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          404
        </h1>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="mt-2 text-base text-gray-500">
          It might have been removed, or the URL might be incorrect.
        </p>
        <div className="mt-6">
          <Link to="/">
            <Button color="primary">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
