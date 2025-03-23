import { Author } from "../models/Author.js";

class AuthorController {
  async create(req, res) {
    try {
      const author = new Author(req.body);
      const savedAuthor = await author.save();
      res.status(201).json(savedAuthor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const authors = await Author.find();
      if (!authors.length) {
        throw new Error("Authors not found");
      }
      res.json(authors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const author = await Author.findById(req.params.id);
      if (!author) throw new Error("Author not found");
      res.json(author);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const updatedAuthor = await Author.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedAuthor) throw new Error("Author not found");
      res.json(updatedAuthor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
      if (!deletedAuthor) throw new Error("Author not found");
      res.json({ message: "Author deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new AuthorController();
