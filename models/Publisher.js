import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Publisher = db.define(
  "Publisher",
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
    tableName: "publishers",
    timestamps: false,
  }
);

export default Publisher;
