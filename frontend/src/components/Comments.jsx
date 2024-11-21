import PropTypes from "prop-types";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 sm:text-2xl mb-1">
        Comments ({comments.length || 0})
      </h3>
      {comments?.length > 0 && (
        <ul className="list-none divide-y divide-gray-200">
          {comments?.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

export default Comments;
