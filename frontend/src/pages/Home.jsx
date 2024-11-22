import CategoryGrid from '../components/CategoryGrid';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductGrid />
      <Testimonials />
      <CategoryGrid />
      <Footer />
    </div>
  );
};

export default Home;
