import express from "express";
import CategoryController from "../controllers/category.controller.js";
import { authUser, permit } from "../middlewares/auth.middleware.js";
import { categoryValidator } from "../validators/category.validator.js";

const router = express.Router();
router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getById);
router.post(
  "/",
  authUser,
  permit("manager", "admin"),
  categoryValidator,
  CategoryController.create
);
router.patch(
  "/:id",
  authUser,
  permit("manager", "admin"),
  categoryValidator,
  CategoryController.update
);
router.delete("/:id", authUser, permit("admin"), CategoryController.delete);
export default router;
