import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';

const Shops = () => {
  const shops = [
    {
      id: 1,
      name: 'Green Leaf Store',
      location: 'Downtown',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Tech World',
      location: 'Uptown',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Book Haven',
      location: 'Midtown',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Fashion Hub',
      location: 'Downtown',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Gadget Galaxy',
      location: 'Uptown',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Home Comforts',
      location: 'Suburbs',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-center">All Shops</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{shop.name}</h2>
                <p className="text-sm text-gray-600">{shop.location}</p>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <Pagination number={0} totalPages={10} />
      </div>
      <Footer />
    </>
  );
};

export default Shops;
