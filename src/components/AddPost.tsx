import { Button } from "react-bootstrap";

const AddPost = ({
  setPostModal,
}: {
  setPostModal: (val: boolean) => void;
}) => {
  return (
    <Button onClick={() => setPostModal(true)} className="block w-full mt-2">
      Add New Post
    </Button>
  );
};

export default AddPost;
