import { Button, ButtonGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IPostItem } from "../types/postType";
import useUpdatePost from "../hooks/useUpdatePost";
import useDeletePost from "../hooks/useDeletePost";

const PostItem = ({ post }: { post: IPostItem }) => {
  const updatePost = useUpdatePost();
  const deletePost = useDeletePost();

  const handleTopRateChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updatePost.mutate({ ...post, topRate: e.target.checked });
  };

  const handleDelete = () => {
    deletePost.mutate(post.id);
  };

  return (
    <tr>
      <td>{post.id}</td>
      <td>
        <Link to="/info">{post.title}</Link>
      </td>
      <td>{post.body}</td>
      <td className="pt-3">
        <Form.Check
          type="switch"
          onChange={(e) => handleTopRateChange(e)}
          checked={post.topRate}
        />
      </td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button type="button" onClick={handleDelete} variant="danger">
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export default PostItem;
