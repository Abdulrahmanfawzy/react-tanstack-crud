import { Table, Row, Col } from "react-bootstrap";
import TableRow from "../components/TableRow";
import PostFilter from "../components/PostFilter";
import PostSearch from "../components/PostSearch";
import useGetPosts from "../hooks/useGetPosts";
import { useState } from "react";
import PostPagination from "../components/PostPagination";
import useSearchPost from "../hooks/useSearchPost";
import AddPost from "../components/AddPost";
import PostModal from "../components/PostModal";

const Home = () => {
  const [paginate, setPaginate] = useState<number>(1);
  const [postStatus, setPostStatus] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const {
    data: allPosts,
    isLoading: postsLoading,
    isError: postsErrorStatus,
    error: postsError,
  } = useGetPosts(paginate, postStatus);
  const {
    data: searchedPost,
    isLoading: searchedPostsLoading,
    isError: searchedPostsErrorStatus,
    error: searchPostsError,
  } = useSearchPost(searchVal);

  if (postsLoading || searchedPostsLoading) {
    return <div>Loading...</div>;
  }

  if (postsErrorStatus) {
    return <div>{postsError.message}</div>;
  }

  if (searchedPostsErrorStatus) {
    return <div>{searchPostsError.message}</div>;
  }

  return (
    <>
      <Row>
        <Col xs={9}>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>id</th>
                <th>Title</th>
                <th>Status</th>
                <th style={{ width: "10%" }}>Top Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <TableRow allPosts={searchVal ? searchedPost : allPosts} />
              {!searchVal && (
                <PostPagination
                  paginate={paginate}
                  setPaginate={setPaginate}
                  pagesCount={allPosts.pages}
                  lastPage={allPosts.last}
                />
              )}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h5>Filter By Status</h5>
          <PostFilter postStatus={postStatus} setPostStatus={setPostStatus} />
          <PostSearch searchVal={searchVal} setSearchVal={setSearchVal} />
          <AddPost />
        </Col>
      </Row>
      <PostModal />
    </>
  );
};

export default Home;
