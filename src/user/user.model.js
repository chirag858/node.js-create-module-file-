import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
}, {
  timestamps: true,
});

export default User;