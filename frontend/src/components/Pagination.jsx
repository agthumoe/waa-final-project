import PropTypes from 'prop-types';

const Pagination = ({ number, totalPages, onChange }) => {
  const handlePrevious = () => {
    if (number > 0) onChange(number - 1);
  };

  const handleNext = () => {
    if (number < totalPages) onChange(number + 1);
  };

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        onClick={handlePrevious}
        disabled={number === 0}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2">
        Page {number + 1} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={number + 1 === totalPages}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  number: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  totalElements: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
