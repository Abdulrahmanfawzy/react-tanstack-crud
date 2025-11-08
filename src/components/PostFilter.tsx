import { Form } from "react-bootstrap";

const PostFilter = ({
  setPostStatus,
  postStatus,
}: {
  setPostStatus: (val: string) => void;
  postStatus: string;
}) => {
  return (
    <Form.Select
      value={postStatus}
      onChange={(e) => setPostStatus(e.target.value)}
    >
      <option value="">Select Status</option>
      <option value="published">Publish</option>
      <option value="draft">Draft</option>
      <option value="block">Blocked</option>
    </Form.Select>
  );
};

export default PostFilter;
