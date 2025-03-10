import Book from "../models/Book.js";
import Author from "../models/Author.js";
import Publisher from "../models/Publisher.js";

class BookController {
  async create(req, res) {
    try {
      const { title, price, authorId, publisherId } = req.body;
      const newBook = await Book.create({
        title,
        price,
        authorId,
        publisherId,
      });
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const books = await Book.findAll({
        include: [
          { model: Author, attributes: ["name"] },
          { model: Publisher, attributes: ["name"] },
        ],
      });
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const book = await Book.findByPk(req.params.id, {
        include: [
          { model: Author, attributes: ["name"] },
          { model: Publisher, attributes: ["name"] },
        ],
      });
      if (!book) {
        throw new Error(`Book with id ${req.params.id} not found`);
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, price, authorId, publisherId } = req.body;
      const [updated] = await Book.update(
        { title, price, authorId, publisherId },
        { where: { id } }
      );
      if (!updated) {
        throw new Error(`Book with id ${id} not found`);
      }
      const updatedBook = await Book.findByPk(id, {
        include: [
          { model: Author, attributes: ["name"] },
          { model: Publisher, attributes: ["name"] },
        ],
      });
      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Book.destroy({ where: { id } });
      if (!deleted) {
        throw new Error(`Book with id ${id} not found`);
      }
      res.json({ message: "Book deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new BookController();
