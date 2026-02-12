import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PublicBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('${process.env.REACT_APP_API_URL}/api/books')
      .then(res => res.json())
      .then(setBooks);
  }, []);

  return (
    <div className="container mt-4">
      <h3>Available Books</h3>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>
                <Link to={`/book/${b.id}`} className="btn btn-info btn-sm">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/admin/login" className="btn btn-secondary mt-3">
        Admin Login
      </Link>
    </div>
  );
}
