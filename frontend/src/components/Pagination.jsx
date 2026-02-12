export default function Pagination({ page, setPage }) {
  return (
    <div className="d-flex justify-content-center mt-3">
      <button className="btn btn-secondary mx-1" onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span className="mx-2">Page {page}</span>
      <button className="btn btn-secondary mx-1" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
