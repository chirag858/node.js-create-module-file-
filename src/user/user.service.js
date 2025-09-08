import UserRepository from "./user.repository.js";

class UserService {
  async create(data) {
    return await UserRepository.create(data);
  }

  async getAll() {
    return await UserRepository.findAll();
  }

  async getById(id) {
    return await UserRepository.findById(id);
  }

  async update(id, data) {
    return await UserRepository.update(id, data);
  }

  async delete(id) {
    return await UserRepository.delete(id);
  }
}

export default new UserService();