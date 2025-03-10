import express from "express";
import db from "./config/db.js";
import authorRoutes from "./routes/author.routes.js";
import publisherRoutes from "./routes/publisher.routes.js";
import bookRoutes from "./routes/book.routes.js";

const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/authors", authorRoutes);
app.use("/publishers", publisherRoutes);
app.use("/books", bookRoutes);

app.listen(PORT, async () => {
  try {
    await db.sync();
    console.log("База данных подключена!");
  } catch (error) {
    console.log(
      "Не получилось подключится к базе данных\n" + "Error: " + error.message
    );
  }
  console.log(`Сервер запущем на http://localhost:${PORT}`);
});
