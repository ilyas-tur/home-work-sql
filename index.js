import express from "express";
import mongoose from "mongoose";
import authorRoutes from "./routes/author.routes.js";
import bookRoutes from "./routes/book.routes.js";
import publisherRoutes from "./routes/publisher.routes.js";
import "dotenv/config";

const app = express();
const PORT = 5000;
const connectionString = process.env.DB_URL;

async function connectDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to database!");
  } catch (error) {
    console.log("Error!");
  }
}

app.use(express.json());
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/publishers", publisherRoutes);

app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Server is running at http://localhost:${PORT}`);
});
