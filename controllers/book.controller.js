import { Book } from "../models/Book.js";

class BookController {
  async create(req, res) {
    try {
      const book = new Book(req.body);
      const savedBook = await book.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const books = await Book.find().populate("author publisher");
      if (!books.length) {
        throw new Error("Books not found");
      }
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const book = await Book.findById(req.params.id).populate(
        "author publisher"
      );
      if (!book) throw new Error("Book not found");
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).populate("author publisher");
      if (!updatedBook) throw new Error("Book not found");
      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) throw new Error("Book not found");
      res.json({ message: "Book deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new BookController();
