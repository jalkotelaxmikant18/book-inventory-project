import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import PublicBooks from "./pages/PublicBooks";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<PublicBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />

        {/* ADMIN LOGIN */}
        <Route
          path="/admin/login"
          element={<Login setLogin={setLoggedIn} />}
        />

        {/* ADMIN DASHBOARD (CRUD) */}
          <Route
            path="/admin"
            element={
              loggedIn ? (
                <Home logout={() => setLoggedIn(false)} />
              ) : (
                <Navigate to="/admin/login" />
              )
            }
          />

      </Routes>
    </BrowserRouter>
  );
}
