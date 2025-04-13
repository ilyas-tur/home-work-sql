const bookPaths = {
  "/books": {
    get: {
      summary: "Get all books",
      tags: ["Book"],
      responses: {
        200: {
          description: "List of books",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Book" },
              },
            },
          },
        },
        500: { description: "Server error" },
      },
    },
  },
  "/books/{id}": {
    get: {
      summary: "Get book by ID",
      tags: ["Book"],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: {
          description: "Book data",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Book" },
            },
          },
        },
        404: { description: "Book not found" },
        500: { description: "Server error" },
      },
    },
  },
};

export default bookPaths;
