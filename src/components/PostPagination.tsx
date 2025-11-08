import { Pagination } from "react-bootstrap";

const PostPagination = ({
  pagesCount,
  paginate,
  setPaginate,
  lastPage,
}: {
  pagesCount: number;
  paginate: number;
  setPaginate: (num: number) => void;
  lastPage: number;
}) => {
  const paginationNums = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <>
      <Pagination>
        <Pagination.Prev
          onClick={() => setPaginate((prev: number) => prev - 1)}
          className={`${
            paginate === paginationNums[0] ? "cursor-not-allowed" : ""
          }`}
          disabled={paginate === paginationNums[0] ? true : false}
        />
        {paginationNums.map((num) => (
          <Pagination.Item
            className={`${paginate == num ? "bg-blue-800!" : ""}`}
            onClick={() => setPaginate(num)}
          >
            {num}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setPaginate((prev) => prev + 1)}
          className={`${paginate === lastPage ? "cursor-not-allowed" : ""}`}
          disabled={paginate === lastPage ? true : false}
        />
      </Pagination>
    </>
  );
};

export default PostPagination;
