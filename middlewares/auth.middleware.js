import jwt from "jsonwebtoken";

export function authUser(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "Токен отсутствует" });
  const token = header.replace(/^Bearer\s/, "");
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    req.role = payload.role;
    next();
  } catch {
    res.status(401).json({ message: "Невалидный токен" });
  }
}

export function permit(...allowed) {
  return (req, res, next) => {
    if (!allowed.includes(req.role)) {
      return res.status(403).json({ message: "Нет доступа" });
    }
    next();
  };
}
