import { Button, Form } from "react-bootstrap";

const PostModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/65 flex justify-center items-center">
      <Form className="w-1/2">
        <Form.Control
          className="mt-2 w-full"
          placeholder="Post Title..."
        ></Form.Control>
        <Form.Control
          className="mt-2 w-full"
          placeholder="Post Body..."
        ></Form.Control>
        <Form.Select className="mt-2">
          <option value="">Select Status</option>
          <option value="published">Publish</option>
          <option value="draft">Draft</option>
          <option value="block">Blocked</option>
        </Form.Select>

        <Button className="block w-full mt-2">Add New Post</Button>
      </Form>
    </div>
  );
};

export default PostModal;
