import _ from 'lodash';
import PropTypes from 'prop-types';

const RatingComment = ({ userName, rating, comment }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
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
  userName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string,
};

const Ratings = ({ ratings }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Customer Ratings & Comments
      </h2>

      {_.map(ratings, (rating, index) => (
        <RatingComment
          key={index}
          userName={rating.userName}
          rating={rating.rating}
          comment={rating.comment}
        />
      ))}
    </div>
  );
};

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      rating: PropTypes.number,
      comment: PropTypes.string,
    })
  ),
};

export default Ratings;
