import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

// Function to fetch user data

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

  // const data = response.json();
  return response.data;
};

function Posts() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  

  return (
    <div className="w-full min-h-screen bg-blue-600 p-4">
      <div className="grid grid-rows-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {isLoading ? (<div>...Loading</div>) : posts?.map((post) => {
          return (
            <Link
              key={post.id}
              className="bg-yellow-700 h-48 rounded-lg p-3 relative cursor-pointer shadow-md"
              to={`/post/${post.id}`}
              
              
            >
              <h2 className="text-md font-bold">{post.title.toString().substring(0, 20)}</h2>
              <p className="font-thin text-sm">{post.body.substring(0, 90)}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
