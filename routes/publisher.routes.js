import express from "express";
import PublisherController from "../controllers/publisher.controller.js";
import { publisherValidator } from "../validators/publisher.validator.js";

const router = express.Router();

router.get("/", PublisherController.getAll);
router.get("/:id", PublisherController.getById);
router.post("/", publisherValidator, PublisherController.create);
router.patch("/:id", publisherValidator, PublisherController.update);
router.delete("/:id", PublisherController.delete);

export default router;
