import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Paths
import authPaths from "./docs/paths/auth.js";
import userPaths from "./docs/paths/user.js";
import authorPaths from "./docs/paths/author.js";
import bookPaths from "./docs/paths/book.js";
import categoryPaths from "./docs/paths/category.js";
import publisherPaths from "./docs/paths/publisher.js";

// Schemas
import userSchema from "./docs/schemas/user.js";
import authorSchema from "./docs/schemas/author.js";
import bookSchema from "./docs/schemas/book.js";
import categorySchema from "./docs/schemas/category.js";
import publisherSchema from "./docs/schemas/publisher.js";

const swaggerDefinition = {
  openapi: "3.1.1",
  info: {
    title: "Library API",
    version: "1.0.0",
    description: "API documentation for the Library application",
  },
  components: {
    schemas: {
      User: userSchema,
      Author: authorSchema,
      Book: bookSchema,
      Category: categorySchema,
      Publisher: publisherSchema,
    },
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths: {
    ...authPaths,
    ...userPaths,
    ...authorPaths,
    ...bookPaths,
    ...categoryPaths,
    ...publisherPaths,
  },
};

const swaggerSpec = swaggerJSDoc({ definition: swaggerDefinition, apis: [] });

export function setupSwagger(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
