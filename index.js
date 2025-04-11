import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/db.js";
import authorRoutes from "./routes/author.routes.js";
import bookRoutes from "./routes/book.routes.js";
import publisherRoutes from "./routes/publisher.routes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/publishers", publisherRoutes);

app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
