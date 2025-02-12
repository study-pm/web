import express from "express"

const app = express();
const PORT = 3000;

// Make REST Open API here
app.get('/', (req, res) => {
    // Serve index.html here
    res.send('Backend');
});

app.get('/area', (req, res) => {
    // Send json/xml results here
    res.send('Area');
});

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});
