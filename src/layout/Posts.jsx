import { useEffect } from "react";
import { handleGetPosts } from "../lib/api";

const Posts = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await handleGetPosts();
      console.log(posts);
    };

    fetchPosts();
  }, []);

  return <section className="section"></section>;
};

export default Posts;
