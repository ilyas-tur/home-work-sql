import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Author = db.define(
  "Author",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "authors",
    timestamps: false,
  }
);

export default Author;
