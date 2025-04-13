import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "./general.validator.js";

const email = body("email").exists().isEmail().withMessage("Неверный email");
const password = body("password")
  .exists()
  .isStrongPassword()
  .withMessage("Слабый пароль");
const firstName = body("firstName").exists().isLength({ min: 2 });
const lastName = body("lastName").exists().isLength({ min: 2 });
const role = body("role").optional().isIn(["user", "manager", "admin"]);

export const registerValidator = createCustomValidatorMiddleware([
  firstName,
  lastName,
  email,
  password,
  role,
]);
export const loginValidator = createCustomValidatorMiddleware([
  email,
  password,
]);
