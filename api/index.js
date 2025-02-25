// index.js

module.exports = (req, res) => {
    const { name = 'World' } = req.query;
    res.status(200).send(`Hello ${name}!`);
    res.status(200).json({ message: "Test route is working!" });
    };