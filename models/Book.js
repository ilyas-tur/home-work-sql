import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Author from "./Author.js";
import Publisher from "./Publisher.js";

const Book = db.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: Author,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    publisherId: {
      type: DataTypes.INTEGER,
      references: {
        model: Publisher,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "books",
    timestamps: true,
  }
);

Author.hasMany(Book, { foreignKey: "authorId" });
Book.belongsTo(Author, { foreignKey: "authorId" });

Publisher.hasMany(Book, { foreignKey: "publisherId" });
Book.belongsTo(Publisher, { foreignKey: "publisherId" });

export default Book;
