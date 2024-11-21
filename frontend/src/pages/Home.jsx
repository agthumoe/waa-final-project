import { useState } from 'react';

const Navbar = () => {
  // Simulate user authentication and role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'buyer' or 'seller'

  // Simulate login/logout actions
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserRole('buyer'); // Change to 'seller' for testing seller role
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold hover:text-gray-300">
          Storefront
        </a>

        {/* Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {isLoggedIn && userRole === 'buyer' && (
            <a
              href="#"
              className="text-white hover:text-gray-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 7h14m-6-7v-4m-4 4h4"
                />
              </svg>
              Cart
            </a>
          )}

          {!isLoggedIn ? (
            <>
              <button
                onClick={handleLogin}
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
              <div className="relative">
                <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
                  Register
                </button>
                {/* Dropdown for Buyer/Seller Registration */}
                <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg hidden group-hover:block">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 border-b"
                  >
                    Register as Buyer
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Register as Seller
                  </a>
                </div>
              </div>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Fashion for Everyone
        </h1>
        <p className="mt-4 text-gray-600">
          Discover the latest trends in clothing.
        </p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md">
          Shop Now
        </button>
      </div>
    </section>
  );
};

const products = [
  {
    id: 1,
    name: 'T-Shirt',
    price: '$20',
    img: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jeans',
    price: '$40',
    img: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Jacket',
    price: '$60',
    img: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Sneakers',
    price: '$50',
    img: 'https://via.placeholder.com/150',
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const categories = [
  { id: 1, name: "Men's Wear", img: 'https://via.placeholder.com/300x200' },
  { id: 2, name: "Women's Wear", img: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Accessories', img: 'https://via.placeholder.com/300x200' },
  { id: 4, name: 'Footwear', img: 'https://via.placeholder.com/300x200' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We provide high-quality, trendy fashion for everyone. Shop with us
              to get the best styles at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Email: support@storefront.com</p>
            <p className="text-sm">Phone: +1 (234) 567-890</p>
            <p className="text-sm">Address: 123 Fashion St., Style City</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 Storefront. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductGrid />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
