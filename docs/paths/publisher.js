const publisherPaths = {
  "/publishers": {
    get: {
      summary: "Get all publishers",
      tags: ["Publisher"],
      responses: {
        200: {
          description: "List of publishers",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Publisher" },
              },
            },
          },
        },
        500: { description: "Server error" },
      },
    },
  },
  "/publishers/{id}": {
    get: {
      summary: "Get publisher by ID",
      tags: ["Publisher"],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: {
          description: "Publisher data",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Publisher" },
            },
          },
        },
        404: { description: "Not found" },
        500: { description: "Server error" },
      },
    },
  },
};

export default publisherPaths;
