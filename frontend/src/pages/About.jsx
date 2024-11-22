import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-8">
            Welcome to **Moe Marketplace**, your one-stop destination for the
            latest and greatest in fashion. We are passionate about providing
            high-quality clothing and accessories for all tastes and occasions.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
            Our mission is to make shopping enjoyable and accessible, whether
            you&apos;re looking for trendy outfits, timeless classics, or unique
            finds. Every product in our store is carefully curated to ensure
            quality and style, helping you express yourself effortlessly.
          </p>
          <p className="text-lg text-gray-700 leading-8 mt-4">
            Thank you for choosing Moe Marketplace. We value your trust and look
            forward to serving you with exceptional products and service.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-8">
              To be a global leader in e-commerce, known for quality,
              reliability, and innovation. We aim to empower our customers with
              the best shopping experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
