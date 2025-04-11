import express from "express";
import BookController from "../controllers/book.controller.js";
import { bookValidator } from "../validators/book.validator.js";

const router = express.Router();

router.get("/", BookController.getAll);
router.get("/:id", BookController.getById);
router.post("/", bookValidator, BookController.create);
router.patch("/:id", bookValidator, BookController.update);
router.delete("/:id", BookController.delete);

export default router;
