import { Link } from 'react-router-dom';

const SellerSidebar = () => {
  return (
    <div className="w-64 bg-sky-950 text-white p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Seller Panel</h2>
        <ul className="space-y-4 mt-4">
          <li>
            <Link
              to="/seller"
              className="block text-white hover:bg-sky-700 px-4 py-2 rounded-md"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/seller/products"
              className="block text-white hover:bg-sky-700 px-4 py-2 rounded-md"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/seller/orders"
              className="block text-white hover:bg-sky-700 px-4 py-2 rounded-md"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/seller/categories"
              className="block text-white hover:bg-sky-700 px-4 py-2 rounded-md"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/seller/subcategories"
              className="block text-white hover:bg-sky-700 px-4 py-2 rounded-md"
            >
              Subcategories
            </Link>
          </li>
          <li>
            <Link
              to="/seller/brands"
              className="block text-white hover:bg-sky-700 px-4 py-2 rounded-md"
            >
              Brands
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SellerSidebar;
