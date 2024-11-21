import PropTypes from "prop-types";

const Comment = ({ comment }) => {
  return <li className="py-3">{comment.name}</li>;
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Comment;
