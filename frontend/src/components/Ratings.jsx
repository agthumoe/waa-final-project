import { TrashIcon } from '@heroicons/react/24/outline';
import { useQueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { deleteRating } from '../api/api';
import useNotificationStore from '../hooks/useNotificationStore';

const RatingComment = ({ userName, id, rating, comment, deletable }) => {
  const { notify } = useNotificationStore();
  const queryClient = useQueryClient();
  const handleDelete = () => {
    deleteRating(id).then(() => {
      queryClient.invalidateQueries('productRatings');
      notify('Rating deleted successfully');
    });
  };
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      {deletable && (
        <div className="relative">
          <button
            onClick={handleDelete}
            className="absolute top-0 right-0 p-2 text-red-500 hover:text-red-600 hover:bg-red-100 rounded transition-colors duration-300"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      )}
      <div className="flex items-center mb-2">
        <span className="font-semibold text-gray-800">{userName}</span>
        <div className="ml-2 text-yellow-500">
          {'★'.repeat(rating)}
          {'☆'.repeat(10 - rating)}
        </div>
      </div>
      {comment && <p className="text-sm text-gray-600 mt-2">{comment}</p>}
    </div>
  );
};

RatingComment.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string,
  deletable: PropTypes.bool,
};

const Ratings = ({ ratings, deletable }) => {
  return (
    <div className="mx-auto p-6 bg-white rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Customer Ratings & Comments
      </h2>

      {_.map(ratings, (rating, index) => (
        <RatingComment
          id={rating.id}
          deletable={deletable}
          key={index}
          userName={rating.userName}
          rating={rating.rating}
          comment={rating.comment}
        />
      ))}
      {_.isEmpty(ratings) && <p className="text-gray-500">No ratings yet!</p>}
    </div>
  );
};

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      userName: PropTypes.string,
      rating: PropTypes.number,
      comment: PropTypes.string,
    })
  ),
  deletable: PropTypes.bool,
};

export default Ratings;
