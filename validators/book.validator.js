import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "./general.validator.js";

const title = body("title")
  .exists({ checkFalsy: true })
  .withMessage("Поле title обязательно!")
  .isString()
  .withMessage("Поле title должно быть строкой!")
  .isLength({ min: 3 })
  .withMessage("Поле title должно содержать минимум 3 символа!");

const summary = body("summary")
  .optional()
  .isString()
  .withMessage("Поле summary должно быть строкой!");

const author = body("author")
  .exists({ checkFalsy: true })
  .withMessage("Поле author обязательно!")
  .isMongoId()
  .withMessage("Поле author должно быть корректным!");

const publisher = body("publisher")
  .optional()
  .isMongoId()
  .withMessage("Поле publisher должно быть корректным!");

const publishedDate = body("publishedDate")
  .optional()
  .isISO8601()
  .withMessage("Поле publishedDate должно быть датой!");

export const bookValidator = createCustomValidatorMiddleware([
  title,
  summary,
  author,
  publisher,
  publishedDate,
]);
