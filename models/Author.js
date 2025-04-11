import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: false },
});

export const Author = mongoose.model("Author", authorSchema);
