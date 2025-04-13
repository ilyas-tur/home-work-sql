import express from "express";
import UserController from "../controllers/user.controller.js";
import { authUser, permit } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.get("/", authUser, permit("admin"), UserController.getAll);
router.get("/me", authUser, UserController.getMe);
router.get("/:id", authUser, permit("admin"), UserController.getById);
router.patch("/:id", authUser, permit("admin"), UserController.update);
router.delete("/:id", authUser, permit("admin"), UserController.delete);
export default router;
