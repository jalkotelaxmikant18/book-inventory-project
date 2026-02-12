import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

export default function BookTable({ selectBook }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const load = () => {
    fetch(`http://localhost:5000/api/books?search=${search}&page=${page}`)
      .then(res => res.json())
      .then(setBooks);
  };

  useEffect(load, [search, page]);

  const del = id =>
    fetch(`http://localhost:5000/api/books/${id}`, { method: "DELETE" })
      .then(load);

  return (
    <>
      <input className="form-control mb-2" placeholder="Search by title" onChange={e => setSearch(e.target.value)} />

      <table className="table table-bordered">
        <thead>
          <tr><th>Title</th><th>Author</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>
                <Link to={`/book/${b.id}`} className="btn btn-info btn-sm me-2">
                  View
                </Link>
                <button className="btn btn-warning btn-sm me-2" onClick={() => selectBook(b)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => del(b.id)}>
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      <Pagination page={page} setPage={setPage} />
    </>
  );
}
