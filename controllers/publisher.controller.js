import Publisher from "../models/Publisher.js";

class PublisherController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const newPublisher = await Publisher.create({ name });
      res.status(201).json(newPublisher);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const publishers = await Publisher.findAll();
      res.json(publishers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const publisher = await Publisher.findByPk(req.params.id);
      if (!publisher) {
        throw new Error(`Publisher with id ${req.params.id} not found`);
      }
      res.json(publisher);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const [updated] = await Publisher.update({ name }, { where: { id } });
      if (!updated) {
        throw new Error(`Publisher with id ${id} not found`);
      }
      const updatedPublisher = await Publisher.findByPk(id);
      res.json(updatedPublisher);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Publisher.destroy({ where: { id } });
      if (!deleted) {
        throw new Error(`Publisher with id ${id} not found`);
      }
      res.json({ message: "Publisher deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new PublisherController();
