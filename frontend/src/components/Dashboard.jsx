import { useContext } from "react";
import StatefulContext from "../contexts/StatefulContext";
import AddPost from "./AddPost";
import Button from "./Button";
import PostDetails from "./PostDetails";
import Posts from "./Posts";

const Dashboard = () => {
  const { invalidate, setIsAddPost, setSelectedPostId } =
    useContext(StatefulContext);

  const onDeleteSuccess = () => {
    invalidate();
  };

  const onAddPostClick = () => {
    setIsAddPost(true);
    setSelectedPostId(null);
  };

  return (
    <div className="p-10">
      <div className="flex flex-col items-start mb-5">
        <h1 className="text-2xl font-bold text-indigo-600 mb-2">Posts</h1>
        <span className="text-sm text-gray-500 block mb-2">
          Click Post to view details
        </span>
        <Button onClick={onAddPostClick}>Create New Post</Button>
      </div>
      <Posts />
      <PostDetails onDeleteSuccess={onDeleteSuccess} />
      <AddPost />
    </div>
  );
};

export default Dashboard;
