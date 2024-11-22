import PropTypes from 'prop-types';

const defaultImage = 'https://via.placeholder.com/300x200';

const Category = ({ id, file, name }) => {
  return (
    <div
      key={id}
      className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <img
        src={file || defaultImage}
        alt={name}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold">{name}</p>
      </div>
    </div>
  );
};

Category.propTypes = {
  id: PropTypes.number.isRequired,
  file: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default Category;
