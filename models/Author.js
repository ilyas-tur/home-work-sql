import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
});

export const Author = mongoose.model("Author", authorSchema);
