const userPaths = {
  "/users/me": {
    get: {
      summary: "Get current user",
      tags: ["User"],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: "Current user data",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        401: { description: "Unauthorized" },
        500: { description: "Server error" },
      },
    },
  },
};

export default userPaths;
