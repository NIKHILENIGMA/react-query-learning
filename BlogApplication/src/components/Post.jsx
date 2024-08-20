import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useParams } from "react-router-dom";

const fetchPost = async (postId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.data;
};


function Post() {
    const { postId } = useParams();
    const { data: post, isLoading } = useQuery({
        queryKey: ["post", postId],
        queryFn: () =>fetchPost(postId),
    });

    if(isLoading){
        <div>Loading...</div>
    }
  return (
    <div className="w-full min-h-screen bg-yellow-700">
        <h1 className="text-2xl font-extrabold text-center">
            {post?.title}
        </h1>
        <p className="font-thin text-center text-lg">
            {post?.body}
        </p>

    </div>
  )
}

export default Post