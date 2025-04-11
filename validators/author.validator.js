import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "./general.validator.js";

const name = body("name")
  .exists({ checkFalsy: true })
  .withMessage("Поле name обязательно!")
  .isString()
  .withMessage("Поле name должно быть строкой!")
  .isLength({ min: 3 })
  .withMessage("Поле name должно содержать минимум 3 символа!");

const bio = body("bio")
  .optional()
  .isString()
  .withMessage("Поле bio должно быть строкой!");

export const authorValidator = createCustomValidatorMiddleware([name, bio]);
