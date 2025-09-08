import UserService from "./user.service.js";

class UserController {
  async create(req, res) {
    try {
      const data = await UserService.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    const data = await UserService.getAll();
    res.json(data);
  }

  async getById(req, res) {
    const data = await UserService.getById(req.params.id);
    if (!data) return res.status(404).json({ message: "User not found" });
    res.json(data);
  }

  async update(req, res) {
    const data = await UserService.update(req.params.id, req.body);
    if (!data) return res.status(404).json({ message: "User not found" });
    res.json(data);
  }

  async delete(req, res) {
    const success = await UserService.delete(req.params.id);
    if (!success) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  }
}

export default new UserController();