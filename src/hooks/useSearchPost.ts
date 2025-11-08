import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IPostItem } from "../types/postType";

const getSearchedPosts = async (q: string) => {
  const { data } = await axios.get(`http://localhost:3000/posts?q=${q}`);
  const filteredData = data.filter((post: IPostItem) =>
    post.title.toLowerCase().startsWith(q)
  );
  return filteredData;
};

const useSearchPost = (q: string) => {
  const searchPosts = useQuery({
    queryKey: ["posts", q],
    queryFn: () => getSearchedPosts(q),
    enabled: !!q,
  });
  return searchPosts;
};

export default useSearchPost;
