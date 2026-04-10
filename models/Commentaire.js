import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Commentaire = sequelize.define("Commentaire", {
  id_commentaire: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  contenu: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },

  date_comment: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  
  note: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  id_chantier: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Chantiers",
      key: "id_chantier",
    },
  },

  id_client: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Clients",
      key: "id_client",
    },
  },
});

export default Commentaire;