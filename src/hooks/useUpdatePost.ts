import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { IPostItem } from "../types/postType";

const updateTopRatePost = async (post: IPostItem) => {
  const { data } = await axios.patch(
    `http://localhost:3000/posts/${post.id}`,
    post
  );
  return data;
};

const useUpdatePost = () => {
  const updatePost = useMutation({
    mutationFn: updateTopRatePost,
    onSuccess: () => {
      console.log("post updated successfully");
    },
  });
  return updatePost;
};

export default useUpdatePost;
