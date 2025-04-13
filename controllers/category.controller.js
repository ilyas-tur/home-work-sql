import { Category } from "../models/Category.js";

class CategoryController {
  async create(req, res) {
    try {
      const cat = await Category.create(req.body);
      res.status(201).json(cat);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  async getAll(req, res) {
    try {
      const cats = await Category.find();
      res.json(cats);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  async getById(req, res) {
    try {
      const cat = await Category.findById(req.params.id);
      if (!cat)
        return res.status(404).json({ message: "Не найдена категория" });
      res.json(cat);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  async update(req, res) {
    try {
      const cat = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!cat)
        return res.status(404).json({ message: "Не найдена категория" });
      res.json(cat);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  async delete(req, res) {
    try {
      const cat = await Category.findByIdAndDelete(req.params.id);
      if (!cat)
        return res.status(404).json({ message: "Не найдена категория" });
      res.status(204).end();
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

export default new CategoryController();
