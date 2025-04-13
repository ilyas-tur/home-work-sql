const authorPaths = {
  "/authors": {
    get: {
      summary: "Get all authors",
      tags: ["Author"],
      responses: {
        200: {
          description: "List of authors",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Author" },
              },
            },
          },
        },
        500: { description: "Server error" },
      },
    },
  },
  "/authors/{id}": {
    get: {
      summary: "Get author by ID",
      tags: ["Author"],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: {
          description: "Author data",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Author" },
            },
          },
        },
        404: { description: "Author not found" },
        500: { description: "Server error" },
      },
    },
  },
};

export default authorPaths;
