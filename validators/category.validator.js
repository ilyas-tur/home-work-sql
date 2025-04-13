import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "./general.validator.js";

const name = body("name").exists().isString().isLength({ min: 3 });
const description = body("description").optional().isString();

export const categoryValidator = createCustomValidatorMiddleware([
  name,
  description,
]);
