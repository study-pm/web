import express from "express"
import { Author, Book, Genre } from "./data/models.js"

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Backend');
});

app.get('/authors', async(req, res) => {
    res.render('authors', { authors });
});

app.get('/genres', async(req, res) => {
    res.render('genres', { genres });
});


app.get('/booklist', async(req, res) => {
    res.render('books', { books });
});


app.get('/books', async(req, res) => {
    res.json({
        books: await Book.findAll({include: [{ model: Author, foreignKey: 'authorId' }]})
    })
});

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});

const genres = await Genre.findAll({ raw: true });
console.log(genres);
const authors = await Author.findAll({ raw: true });
console.log(authors);
const books = await Book.findAll({ 
    raw: true,
    include: [{
        model: Author
    }]
});
console.log(books);
