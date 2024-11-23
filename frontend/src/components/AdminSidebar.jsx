import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <ul className="space-y-4 mt-4">
          <li>
            <Link
              to="/admin"
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/users"
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/products"
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/admin/categories"
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/admin/subcategories"
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Subcategories
            </Link>
          </li>
          <li>
            <Link
              to="/admin/brands"
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md"
            >
              Brands
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
