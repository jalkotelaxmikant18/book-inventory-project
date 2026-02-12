import { useState, useEffect } from "react";

export default function BookForm({ selectedBook, refresh }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    email: "",
    age: "",
    publisher: "",
    overview: ""
  });

  useEffect(() => {
    if (selectedBook) setBook(selectedBook);
  }, [selectedBook]);

  const handleChange = e =>
    setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if (!/^[^@]+@[^@]+\.[^@]+$/.test(book.email)) {
      alert("Invalid email");
      return;
    }
    if (isNaN(book.age)) {
      alert("Age must be integer");
      return;
    }

    fetch(`${process.env.REACT_APP_API_URL}/api/books${book.id ? "/" + book.id : ""}`, {
      method: book.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...book, age: Number(book.age) })
    }).then(() => {
      refresh();
      setBook({ title:"",author:"",email:"",age:"",publisher:"",overview:"" });
    });
  };

  return (
    <form className="card p-3 mb-3" onSubmit={handleSubmit}>
      <h5>{book.id ? "Edit Book" : "Add Book"}</h5>

      <input className="form-control mb-2" name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
      <input className="form-control mb-2" name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
      <input className="form-control mb-2" name="email" placeholder="Email" value={book.email} onChange={handleChange} required />
      <input className="form-control mb-2" name="age" placeholder="Age" value={book.age} onChange={handleChange} required />
      <input className="form-control mb-2" name="publisher" placeholder="Publisher" value={book.publisher} onChange={handleChange} />
      <textarea className="form-control mb-2" name="overview" placeholder="Overview" value={book.overview} onChange={handleChange} />

      <button className="btn btn-success">Save</button>
    </form>
  );
}
