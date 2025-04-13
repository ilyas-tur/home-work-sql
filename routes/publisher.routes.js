import express from "express";
import PublisherController from "../controllers/publisher.controller.js";
import { publisherValidator } from "../validators/publisher.validator.js";
import { authUser, permit } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", PublisherController.getAll);
router.get("/:id", PublisherController.getById);

router.post(
  "/",
  authUser,
  permit("manager", "admin"),
  publisherValidator,
  PublisherController.create
);
router.patch(
  "/:id",
  authUser,
  permit("manager", "admin"),
  publisherValidator,
  PublisherController.update
);
router.delete("/:id", authUser, permit("admin"), PublisherController.delete);

export default router;
