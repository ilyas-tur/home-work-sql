import { User } from "../models/User.js";
import { hashPassword } from "../services/bcrypt.js";

class UserController {
  async getAll(req, res, next) {
    try {
      const users = await User.find().select("-password");
      res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async getMe(req, res) {
    try {
      const user = await User.findById(req.userId).select("-password");
      res.json(user);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async getById(req, res, next) {
    try {
      const user = await User.findById(req.params.id).select("-password");
      if (!user) {
        const err = new Error("User not found");
        err.statusCode = 404;
        throw err;
      }
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const data = { ...req.body };
      if (data.password) {
        data.password = await hashPassword(data.password);
      }
      const updated = await User.findByIdAndUpdate(req.params.id, data, {
        new: true,
      }).select("-password");
      if (!updated) {
        const err = new Error("User not found");
        err.statusCode = 404;
        throw err;
      }
      res.json(updated);
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      const deleted = await User.findByIdAndDelete(req.params.id);
      if (!deleted) {
        const err = new Error("User not found");
        err.statusCode = 404;
        throw err;
      }
      res.status(204).end();
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();
