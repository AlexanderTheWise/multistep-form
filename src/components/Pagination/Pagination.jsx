import "./Pagination.css";

export default function Pagination({
  length,
  currentPage,
  pagination: { moveBackwards, moveForwards },
}) {
  return (
    <div className="pagination flex bx-between">
      <button
        className={`pagination__prev ${
          currentPage ? "" : "pagination__prev--hidden"
        }`}
        onClick={moveBackwards}
      >
        Go Back
      </button>
      <button
        className="pagination__next"
        onClick={() => moveForwards(length)}
        type="button"
      >
        {currentPage === length - 2 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
