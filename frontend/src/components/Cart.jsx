import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Cart = () => {
  const { data, isLoading } = useCart();
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <button
        type="button"
        className="text-white hover:text-gray-300 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v.01M8 4v.01M16 4v.01M12 20v.01M8 20v.01M16 20v.01M4 12h.01M4 8h.01M4 16h.01M20 12h.01M20 8h.01M20 16h.01"
          />
        </svg>
        Cart
      </button>
    );
  }
  return (
    <button
      onClick={() => navigate('/buyer/cart')}
      type="button"
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
      Cart ({data?.items?.length || 0})
    </button>
  );
};

export default Cart;
