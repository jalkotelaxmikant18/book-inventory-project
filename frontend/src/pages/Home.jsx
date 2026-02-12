import { useState } from "react";
import Navbar from "../components/Navbar";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";

export default function Home({ logout }) {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <Navbar logout={logout} />
      <div className="container mt-3" style={{ height: "85vh", overflowY: "scroll" }}>
        <BookForm selectedBook={selectedBook} refresh={() => setSelectedBook(null)} />
        <BookTable selectBook={setSelectedBook} />
      </div>
    </>
  );
}
