import useGetAllPosts from "../hooks/useGetAllPosts";
import Post from "../components/Post";

const Posts = () => {
  const posts = useGetAllPosts();

  return (
    <div className="grid grid-cols-4 gap-4">
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
