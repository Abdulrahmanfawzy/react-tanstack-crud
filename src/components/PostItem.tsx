import { Button, ButtonGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IPostItem } from "../types/postType";

const PostItem = ({ post }: { post: IPostItem }) => {
  return (
    <tr>
      <td>{post.id}</td>
      <td>
        <Link to="/info">{post.title}</Link>
      </td>
      <td>{post.body}</td>
      <td className="pt-3">
        <Form.Check type="switch" checked={post.topRate} />
      </td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export default PostItem;
