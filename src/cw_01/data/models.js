import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
  });

class Genre extends Model {}
Genre.init(
    {
        title: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: 'Genre',
    },
);

class Author extends Model {}
Author.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDate: DataTypes.DATE,
        deathDate: DataTypes.DATE
    },
    {
        sequelize,
        modelName: 'Author'
    },
);

class Book extends Model {}
Book.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        publishYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Book'
    },
);

Author.hasMany(Book, { foreignKey: 'authorId' });
Genre.hasMany(Book, { foreignKey: 'genreId' });
Book.belongsTo(Author, { foreignKey: 'authorId' });
Book.belongsTo(Genre, { foreignKey: 'genreId' });

export { Author, Genre, Book }
export default sequelize
