const authPaths = {
  "/auth/register": {
    post: {
      summary: "Register a new user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                firstName: { type: "string", example: "John" },
                lastName: { type: "string", example: "Doe" },
                email: { type: "string", example: "john.doe@example.com" },
                password: { type: "string", example: "Qwerty123!" },
                role: {
                  type: "string",
                  enum: ["user", "manager", "admin"],
                  example: "user",
                },
              },
              required: ["firstName", "lastName", "email", "password"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "User created successfully",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        409: { description: "Email already in use" },
        422: { description: "Validation error" },
        500: { description: "Server error" },
      },
    },
  },
  "/auth/login": {
    post: {
      summary: "Login a user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string", example: "john.doe@example.com" },
                password: { type: "string", example: "Qwerty123!" },
              },
              required: ["email", "password"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "JWT token returned",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: { token: { type: "string" } },
              },
            },
          },
        },
        401: { description: "Invalid credentials" },
        422: { description: "Validation error" },
        500: { description: "Server error" },
      },
    },
  },
};

export default authPaths;
