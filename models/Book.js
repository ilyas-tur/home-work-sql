import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    reviewer: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
  },
  { _id: false }
);

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    publisher: { type: mongoose.Schema.Types.ObjectId, ref: "Publisher" },
    publishedDate: { type: Date },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
