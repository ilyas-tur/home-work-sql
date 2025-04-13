import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    reviewer: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: false },
  },
  { _id: false }
);

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    summary: { type: String, required: false },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    }, // one-to-many
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Publisher",
      required: false,
    }, // one-to-many
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }], // many-to-many
    publishedDate: { type: Date },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
