import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
});

export const Publisher = mongoose.model("Publisher", publisherSchema);
