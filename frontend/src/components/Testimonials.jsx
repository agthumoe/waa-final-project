const Testimonials = () => {
  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600 mb-4">
              &quot;The products are amazing! I loved the quality, and the
              delivery was on time.&quot;
            </p>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-gray-500">Regular Customer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600 mb-4">
              &quot;Great service and customer support! The website is easy to
              use and has everything I need.&quot;
            </p>
            <p className="font-semibold text-gray-800">Jane Smith</p>
            <p className="text-gray-500">Happy Shopper</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600 mb-4">
              &quot;I love how fast everything arrived, and the packaging was
              fantastic.&quot;
            </p>
            <p className="font-semibold text-gray-800">Mike Taylor</p>
            <p className="text-gray-500">Frequent Buyer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
