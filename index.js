import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDatabase } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import authorRoutes from "./routes/author.routes.js";
import bookRoutes from "./routes/book.routes.js";
import publisherRoutes from "./routes/publisher.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import { setupSwagger } from "./swagger.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/publishers", publisherRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, async () => {
  await connectDatabase();
  setupSwagger(app);
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
