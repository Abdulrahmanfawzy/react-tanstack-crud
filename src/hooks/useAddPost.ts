import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { IPostItem } from "../types/postType";

const addPostFun = async (post: IPostItem) => {
  const { data } = await axios.post(`http://localhost:3000/posts`, post);
  return data;
};

const useAddPost = () => {
  const addPost = useMutation({
    mutationFn: addPostFun,
    onSuccess: () => {
      console.log("post added successfully");
    },
  });
  return addPost;
};

export default useAddPost;
