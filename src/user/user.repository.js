import User from "./user.model.js";

class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async update(id, data) {
    const record = await User.findByPk(id);
    if (!record) return null;
    return await record.update(data);
  }

  async delete(id) {
    const record = await User.findByPk(id);
    if (!record) return null;
    await record.destroy();
    return true;
  }
}

export default new UserRepository();