import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Clients = sequelize.define("Clients", {
  id_client: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nom: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },

  prenom: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(50),
    unique: true,
  },

  telephone: {
    type: DataTypes.STRING(20),
    unique: true,
  },

  mot_de_passe: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

export default Clients;