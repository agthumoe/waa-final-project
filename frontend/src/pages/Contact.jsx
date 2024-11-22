import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            Got a question? Need help? We&apos;d love to hear from you! Feel
            free to reach out to us using the contact form below or via the
            provided information.
          </p>

          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-700">
              Email:{' '}
              <a
                href="mailto:info@moe-marketplace.com"
                className="text-blue-600"
              >
                info@moe-marketplace.com
              </a>
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Phone:{' '}
              <a href="tel:+1234567890" className="text-blue-600">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Address: 123 Fashion Street, Style City, USA
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
