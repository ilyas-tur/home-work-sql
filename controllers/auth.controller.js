import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { hashPassword, checkValidPassword } from "../services/bcrypt.js";

class AuthController {
  async register(req, res, next) {
    try {
      const { firstName, lastName, email, password, role } = req.body;
      if (await User.findOne({ email })) {
        return res.status(409).json({ message: "Email уже занят" });
      }
      const hashed = await hashPassword(password);
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashed,
        role,
      });
      res.status(201).json({ user });
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await checkValidPassword(password, user.password))) {
        return res.status(401).json({ message: "Неверный email или пароль" });
      }
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "12h" }
      );
      res.json({ token });
    } catch (e) {
      next(e);
    }
  }
}

export default new AuthController();
