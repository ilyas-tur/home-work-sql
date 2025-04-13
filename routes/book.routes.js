import express from "express";
import BookController from "../controllers/book.controller.js";
import { bookValidator } from "../validators/book.validator.js";
import { authUser, permit } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", BookController.getAll);
router.get("/:id", BookController.getById);
router.post(
  "/",
  authUser,
  permit("manager", "admin"),
  bookValidator,
  BookController.create
);
router.patch(
  "/:id",
  authUser,
  permit("manager", "admin"),
  bookValidator,
  BookController.update
);
router.delete(
  "/:id",
  authUser,
  permit("manager", "admin"),
  BookController.delete
);

export default router;
