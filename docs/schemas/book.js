const reviewSchema = {
  type: "object",
  properties: {
    reviewer: { type: "string" },
    rating: { type: "integer", minimum: 1, maximum: 5 },
    comment: { type: "string" },
  },
};

const bookSchema = {
  type: "object",
  properties: {
    _id: { type: "string" },
    title: { type: "string" },
    summary: { type: "string" },
    author: { $ref: "#/components/schemas/Author" },
    publisher: { $ref: "#/components/schemas/Publisher" },
    categories: {
      type: "array",
      items: { $ref: "#/components/schemas/Category" },
    },
    publishedDate: { type: "string", format: "date" },
    reviews: { type: "array", items: reviewSchema },
  },
};

export default bookSchema;
