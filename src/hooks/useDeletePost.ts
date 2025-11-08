import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const deletePost = async (id) => {
  const { data } = await axios.delete(`http://localhost:3000/posts/${id}`);
  return data;
};

const useDeletePost = () => {
  const postDeleted = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      console.log("post is deleted successfully");
    },
  });
  return postDeleted;
};

export default useDeletePost;
