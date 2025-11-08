import { IPostResponse } from "../types/postType";
import PostItem from "./PostItem";

const TableRow = ({ allPosts }: { allPosts: IPostResponse }) => {
  return (
    <>
      {(allPosts.data || allPosts).map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
};

export default TableRow;
