import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/books/${id}`)
      .then(res => res.json())
      .then(setBook);
  }, [id]);

  if (!book) return <p className="m-3">Loading...</p>;

  return (
    <div className="container mt-4">
      <h3>Book Details</h3>
      <hr />

      <p><b>Title:</b> {book.title}</p>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Publisher:</b> {book.publisher}</p>
      <p><b>Published Date:</b> {book.published_date}</p>
      <p><b>Overview:</b> {book.overview}</p>

      <Link to="/" className="btn btn-secondary mt-3">
        Back
      </Link>
    </div>
  );
}
