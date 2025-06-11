import { Post } from "@/types";

export const getBlogs = async (): Promise<Post> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?");
  return res.json();
};
