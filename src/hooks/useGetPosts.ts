import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllPosts = async (paginate: number, postStatus: string) => {
  const { data } = await axios.get(
    `http://localhost:3000/posts?_page=${paginate}&status=${postStatus}`
  );
  return data;
};

const useGetPosts = (paginate: number, postStatus: string) => {
  const getPosts = useQuery({
    queryKey: ["posts", postStatus, paginate],
    queryFn: () => getAllPosts(paginate, postStatus),
    staleTime: 1000 * 60,
  });
  return getPosts;
};

export default useGetPosts;
