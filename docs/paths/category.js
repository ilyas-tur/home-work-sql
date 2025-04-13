const categoryPaths = {
  "/categories": {
    get: {
      summary: "Get all categories",
      tags: ["Category"],
      responses: {
        200: {
          description: "List of categories",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Category" },
              },
            },
          },
        },
        500: { description: "Server error" },
      },
    },
  },
  "/categories/{id}": {
    get: {
      summary: "Get category by ID",
      tags: ["Category"],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: {
          description: "Category data",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Category" },
            },
          },
        },
        404: { description: "Not found" },
        500: { description: "Server error" },
      },
    },
  },
};

export default categoryPaths;
