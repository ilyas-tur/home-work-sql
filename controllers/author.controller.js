import Author from "../models/Author.js";

class AuthorController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const newAuthor = await Author.create({ name });
      res.status(201).json(newAuthor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const authors = await Author.findAll();
      res.json(authors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const author = await Author.findByPk(req.params.id);
      if (!author) {
        throw new Error(`Author with id ${req.params.id} not found`);
      }
      res.json(author);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await Author.update({ name }, { where: { id } });
      if (!updated) {
        throw new Error(`Author with id ${id} not found`);
      }
      const updatedAuthor = await Author.findByPk(id);
      res.json(updatedAuthor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Author.destroy({ where: { id } });
      if (!deleted) {
        throw new Error(`Author with id ${id} not found`);
      }
      res.json({ message: "Author deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new AuthorController();
