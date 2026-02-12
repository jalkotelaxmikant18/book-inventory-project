require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
