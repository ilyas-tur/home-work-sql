import express from "express";
import AuthorController from "../controllers/author.controller.js";
import { authorValidator } from "../validators/author.validator.js";

const router = express.Router();

router.get("/", AuthorController.getAll);
router.get("/:id", AuthorController.getById);
router.post("/", authorValidator, AuthorController.create);
router.patch("/:id", authorValidator, AuthorController.update);
router.delete("/:id", AuthorController.delete);

export default router;
