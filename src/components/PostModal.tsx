import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const PostModal = ({
  setPostModal,
  postModal,
}: {
  setPostModal: (val: boolean) => void;
  postModal: boolean;
}) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    status: "",
    topRate: false,
  });
  const handleModalClick = (e) => {
    if (e.target.classList.contains("fixed")) {
      setPostModal(false);
    }
  };

  const handleChange = (e, key: string) => {
    const value =
      e.target.type === "checkbox" || e.target.type === "switch"
        ? e.target.checked
        : e.target.value;

    setPost((prev) => ({ ...prev, [key]: value }));
  };

  const addPostFun = () => {
    if (post.title != "" && post.body != "" && post.status != "") {
      setPostModal(false);
    }
  };

  return (
    <>
      {postModal && (
        <div
          onClick={handleModalClick}
          className="fixed top-0 left-0 w-full h-screen bg-black/65 flex justify-center items-center"
        >
          <Form className="w-1/2">
            <Form.Control
              className="mt-2 w-full"
              placeholder="Post Title..."
              value={post.title}
              onChange={(e) => handleChange(e, "title")}
            ></Form.Control>
            <Form.Control
              className="mt-2 w-full"
              placeholder="Post Body..."
              value={post.body}
              onChange={(e) => handleChange(e, "body")}
            ></Form.Control>
            <Form.Select
              onChange={(e) => handleChange(e, "status")}
              value={post.status}
              className="mt-2"
            >
              <option value="">Select Status</option>
              <option value="published">Publish</option>
              <option value="draft">Draft</option>
              <option value="block">Blocked</option>
            </Form.Select>
            <div className="flex gap-2 mt-2">
              <span className="text-white">Top Rate:</span>
              <Form.Check
                onChange={(e) => handleChange(e, "topRate")}
                type="switch"
                checked={post.topRate}
              />
            </div>
            <Button onClick={addPostFun} className="block w-full mt-2">
              Add New Post
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default PostModal;
