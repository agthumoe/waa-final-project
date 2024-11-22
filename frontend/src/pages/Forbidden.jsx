import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-lg text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold text-gray-900">403</h1>
        <p className="mt-4 text-xl font-semibold text-gray-700">
          Forbidden Access
        </p>
        <p className="mt-2 text-lg text-gray-600">
          You do not have permission to view this page. Please contact your
          administrator or return to the homepage.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button color="primary" size="lg">
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
