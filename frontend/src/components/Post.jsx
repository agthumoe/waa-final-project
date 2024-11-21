import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Badge from "./Badge";

const Post = ({ id, title, author }) => {
  return (
    <Link to={`/auth/posts/${id}`}>
      <div
        className="border shadow-md rounded-lg p-6 w-full hover:shadow-lg cursor-pointer transition duration-300 bg-white"
        role="button"
      >
        <div className="flex items-center space-x-4">
          <h3 className="font-medium text-md">{author}</h3>
          <Badge>ID: {id}</Badge>
        </div>
        <div className="text-gray-600 text-md mt-1">{title}</div>
      </div>
    </Link>
  );
};

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Post;
