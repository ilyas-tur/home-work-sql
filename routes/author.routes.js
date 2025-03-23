import express from "express";
import AuthorController from "../controllers/author.controller.js";

const router = express.Router();

router.get("/", AuthorController.getAll);
router.get("/:id", AuthorController.getById);
router.post("/", AuthorController.create);
router.patch("/:id", AuthorController.update);
router.delete("/:id", AuthorController.delete);

export default router;
