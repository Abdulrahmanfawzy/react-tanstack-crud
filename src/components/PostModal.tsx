import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAddPost from "../hooks/useAddPost";

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

  const addPost = useAddPost();

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

  const addPostFun = (e) => {
    e.preventDefault();
    if (post.title != "" && post.body != "" && post.status != "") {
      setPostModal(false);
      addPost.mutate(post, {
        onSuccess: () => {
          console.log("data successed");
        },
        onError: (err) => {
          console.log(err.message);
        },
      });
    }
  };

  return (
    <>
      {postModal && (
        <div
          onClick={handleModalClick}
          className="fixed top-0 left-0 w-full h-screen bg-black/65 flex justify-center items-center"
        >
          <Form
            onSubmit={(e) => e.preventDefault()}
            className="w-1/2 bg-white px-5 py-5 rounded-md"
          >
            <h2 className="text-center mb-4">Add New Post</h2>
            <Form.Control
              className="mt-3 w-full"
              placeholder="Post Title..."
              value={post.title}
              onChange={(e) => handleChange(e, "title")}
            ></Form.Control>
            <Form.Control
              className="mt-3 w-full"
              placeholder="Post Body..."
              value={post.body}
              onChange={(e) => handleChange(e, "body")}
            ></Form.Control>
            <Form.Select
              onChange={(e) => handleChange(e, "status")}
              value={post.status}
              className="mt-3"
            >
              <option value="">Select Status</option>
              <option value="published">Publish</option>
              <option value="draft">Draft</option>
              <option value="block">Blocked</option>
            </Form.Select>
            <div className="flex gap-2 mt-3">
              <span className="">Top Rate:</span>
              <Form.Check
                onChange={(e) => handleChange(e, "topRate")}
                type="switch"
                checked={post.topRate}
              />
            </div>
            <Button
              type="button"
              onClick={(e) => addPostFun(e)}
              className="block w-full mt-3"
            >
              Add New Post
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default PostModal;
