const express = require('express');
const router = express.Router();
const db = require('../db');


router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM admin WHERE username=? AND password=?",
    [username, password],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (result.length > 0) {
        res.json({ success: true });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    }
  );
});



module.exports = router;