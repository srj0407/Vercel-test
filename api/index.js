module.exports = (req, res) => {
    try {
        const { name = 'World' } = req.query;
        res.status(200).json({ message: `Hello, ${name}!` });
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
