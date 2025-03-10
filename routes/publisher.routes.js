import express from "express";
import PublisherController from "../controllers/publisher.controller.js";

const router = express.Router();

router.post("/", PublisherController.create);
router.get("/", PublisherController.getAll);
router.get("/:id", PublisherController.getById);
router.put("/:id", PublisherController.update);
router.delete("/:id", PublisherController.delete);

export default router;
