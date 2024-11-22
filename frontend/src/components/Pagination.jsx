import cx from 'classnames';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
const Pagination = ({ className, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 0);
  const size = Number(searchParams.get('size') || 10);

  // Handle page change (Previous and Next)
  const handleNext = () => {
    setSearchParams({ page: page + 1, size });
  };

  const handlePrevious = () => {
    setSearchParams({ page: page - 1, size });
  };

  return (
    <nav className={cx('flex justify-center my-5', className)}>
      <div className="flex">
        <button
          onClick={handlePrevious}
          disabled={page === 0}
          className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Pagination;
