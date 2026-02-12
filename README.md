# Book Inventory Management System

## Project Description
The Book Inventory Management System is a full-stack web application developed using **React**, **Node.js**, **Express**, and **MySQL**.  
The system is designed with **role-based access**, where public users can view book information in read-only mode, and admin users can manage the inventory using full CRUD operations.

---

## Technologies Used
- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express
- **Database:** MySQL
- **Version Control:** Git & GitHub

---

## Features

### Public User (Read-Only)
- View list of available books
- View detailed book information
- Scrollable and responsive interface
- No login required

### Admin User
- Secure admin login
- Add new books
- Edit existing book details
- Delete books
- Search and pagination
- CRUD operations restricted to admin only

### General
- API-based dynamic data fetching
- Responsive design using Bootstrap
- Proper data validation (email format, integer fields, required text fields)

---

## Application Flow
- When the application is opened, it displays a **public read-only book list**.
- Any user can click a book to view its detailed information.
- Admin users access a **separate admin login page** to manage book records.
- CRUD operations are accessible **only after admin login**.

---

## Admin Login Credentials
Use the following credentials to log in as admin:

- **Username:** admin  
- **Password:** admin123  

> Note: These credentials are pre-configured in the database for academic demonstration purposes.

---

## Project Structure

book-inventory-project/
│
├── backend/
│ ├── server.js # Backend server entry point
│ ├── db.js # MySQL database connection
│ ├── validation.js # Backend validation logic
│ ├── routes/
│ │ ├── auth.js # Admin authentication routes
│ │ └── books.js # Book CRUD and API routes
│ └── middleware/
│ └── auth.js # Authentication middleware (optional)
│
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── BookForm.jsx
│ │ │ ├── BookTable.jsx
│ │ │ └── Pagination.jsx
│ │ ├── pages/
│ │ │ ├── PublicBooks.jsx
│ │ │ ├── BookDetails.jsx
│ │ │ ├── Login.jsx
│ │ │ └── Home.jsx
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── database.sql # MySQL database schema
├── .gitignore # Git ignore file
└── README.md # Project documentation


## How to Run the Project

### 1. Database Setup
- Start MySQL (XAMPP or MySQL Server)
- Create database and tables using `database.sql`

cd backend
npm install
node server.js

Backend runs at:  
`http://localhost:5000`

---

### 3. Run Frontend
cd frontend
npm install
npm start


Frontend runs at:  
`http://localhost:3000`

---

## Live URLs (Local Development)
- **Frontend:** http://localhost:3000  
- **Backend API:** http://localhost:5000  

---

## Conclusion
This project demonstrates a complete full-stack web application with proper separation of frontend and backend, role-based access control, RESTful API integration, and database management. It is suitable for academic submission and practical demonstrations.

