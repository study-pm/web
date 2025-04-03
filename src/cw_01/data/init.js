import sequelize from './models.js';
import { Author, Genre, Book } from './models.js';

(async() => {
    await sequelize.sync({ force: true });

    await Genre.bulkCreate([
        { title: "fiction" },
        { title: "fantansy" },
        { title: "novel" },
        { title: "romance" },
        { title: "sci-fi" },
        { title: "adventure" },
        { title: "detective" },
        { title: "horror" },
        { title: "action" },
        { title: "history" },
        { title: "cooking" },
        { title: "poetry" },
        { title: "biography" },
        { title: "thriller" },
    ]);

    await Author.bulkCreate([
        { firstName: "Agatha", lastName: "Christie", birthDate: new Date(1890, 10, 15), deathDate: new Date(1976, 1, 12) },
        { firstName: "Dan", lastName: "Brown", birthDate: new Date(1964, 6, 22) },
        { firstName: "Paolo", lastName: "Coelho" },
        { firstName: "Nikolai", lastName: "Ostrovsky" },
    ]);

    await Book.bulkCreate([
        { title: "And Then There Were None", publishYear: 1939, authorId: 1, genreId: 7 },
        { title: "The Da Vinci Code", publishYear: 2003, authorId: 2, genreId: 14 },
    ]);

})();
