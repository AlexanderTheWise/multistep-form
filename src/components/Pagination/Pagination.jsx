import "./Pagination.css";

export default function Pagination({
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
        onClick={() => moveForwards(2)}
        type="button"
      >
        Next Step
      </button>
    </div>
  );
}
