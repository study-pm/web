import express from "express"

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Backend');
});

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});
