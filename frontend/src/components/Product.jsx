import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const defaultImage = 'https://via.placeholder.com/150';

const Product = ({ id, file, name, basePrice }) => {
  return (
    <Link to={`/products/${id}`}>
      <div key={id} className="group relative hover:cursor-pointer">
        <img
          src={file || defaultImage}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </a>
            </h3>
            {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
          </div>
          <p className="text-sm font-medium text-gray-900">{basePrice}</p>
        </div>
      </div>
    </Link>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  file: PropTypes.string,
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
