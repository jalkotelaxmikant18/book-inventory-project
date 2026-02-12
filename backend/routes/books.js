const express = require('express');
const router = express.Router();
const db = require('../db');
const { validateBook } = require('../validation');


router.get('/', (req, res) => {
const { search = '', page = 1 } = req.query;
const limit = 5;
const offset = (page - 1) * limit;


db.query(
`SELECT * FROM books WHERE title LIKE ? LIMIT ? OFFSET ?`,
[`%${search}%`, limit, offset],
(err, data) => res.json(data)
);
});


router.post('/', validateBook, (req, res) => {
db.query('INSERT INTO books SET ?', req.body, () => res.json({ msg: 'Added' }));
});


router.put('/:id', validateBook, (req, res) => {
db.query('UPDATE books SET ? WHERE id=?', [req.body, req.params.id], () => res.json({ msg: 'Updated' }));
});


router.delete('/:id', (req, res) => {
db.query('DELETE FROM books WHERE id=?', [req.params.id], () => res.json({ msg: 'Deleted' }));
});


router.get('/:id', (req, res) => {
db.query('SELECT * FROM books WHERE id=?', [req.params.id], (e, r) => res.json(r[0]));
});


module.exports = router;