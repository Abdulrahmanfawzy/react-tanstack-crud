import { Form } from "react-bootstrap";

const PostFilter = ({
  setPostStatus,
}: {
  setPostStatus: (val: string) => void;
}) => {
  return (
    <Form.Select onChange={(e) => setPostStatus(e.target.value)}>
      <option value="">Select Status</option>
      <option value="published">Publish</option>
      <option value="draft">Draft</option>
      <option value="block">Blocked</option>
    </Form.Select>
  );
};

export default PostFilter;
