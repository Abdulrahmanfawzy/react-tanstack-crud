import { Form } from "react-bootstrap";

const PostSearch = ({
  setSearchVal,
  searchVal,
}: {
  setSearchVal: (val: string) => void;
  searchVal: string;
}) => {
  return (
    <Form.Control
      onChange={(e) => setSearchVal(e.target.value)}
      value={searchVal}
      className="mt-2"
      placeholder="Search..."
    ></Form.Control>
  );
};

export default PostSearch;
