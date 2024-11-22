import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import ProductDetails from '../../components/ProductDetails';
import Ratings from '../../components/Ratings';
import useOneProduct from '../../hooks/useOneProduct';
import useProductRating from '../../hooks/useProductRatings';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useOneProduct(id);
  const { data: ratings } = useProductRating(id);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex-1">
      <ProductDetails product={product} />
      <Ratings ratings={ratings} deletable />
    </div>
  );
};

export default ProductDetailsPage;
