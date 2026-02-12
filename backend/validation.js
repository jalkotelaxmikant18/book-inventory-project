exports.validateBook = (req, res, next) => {
const { title, author, email, age } = req.body;


if (!title || !author) return res.status(400).json({ msg: 'Text fields required' });
if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) return res.status(400).json({ msg: 'Invalid Email' });
if (!Number.isInteger(age)) return res.status(400).json({ msg: 'Age must be integer' });


next();
};