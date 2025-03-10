import express from "express";
import BookController from "../controllers/book.controller.js";

const router = express.Router();

router.post("/", BookController.create);
router.get("/", BookController.getAll);
router.get("/:id", BookController.getById);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);

export default router;
