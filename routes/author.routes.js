import express from "express";
import AuthorController from "../controllers/author.controller.js";
import { authorValidator } from "../validators/author.validator.js";
import { authUser, permit } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", AuthorController.getAll);
router.get("/:id", AuthorController.getById);
router.post(
  "/",
  authUser,
  permit("manager", "admin"),
  authorValidator,
  AuthorController.create
);
router.patch(
  "/:id",
  authUser,
  permit("manager", "admin"),
  authorValidator,
  AuthorController.update
);
router.delete(
  "/:id",
  authUser,
  permit("manager", "admin"),
  AuthorController.delete
);

export default router;
