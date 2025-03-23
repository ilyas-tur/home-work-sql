import { Publisher } from "../models/Publisher.js";

class PublisherController {
  async create(req, res) {
    try {
      const publisher = new Publisher(req.body);
      const savedPublisher = await publisher.save();
      res.status(201).json(savedPublisher);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const publishers = await Publisher.find();
      if (!publishers.length) {
        throw new Error("Publishers not found");
      }
      res.json(publishers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const publisher = await Publisher.findById(req.params.id);
      if (!publisher) throw new Error("Publisher not found");
      res.json(publisher);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const updatedPublisher = await Publisher.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedPublisher) throw new Error("Publisher not found");
      res.json(updatedPublisher);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deletedPublisher = await Publisher.findByIdAndDelete(req.params.id);
      if (!deletedPublisher) throw new Error("Publisher not found");
      res.json({ message: "Publisher deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new PublisherController();
