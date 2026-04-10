import { DataTypes } from "sequelize";
import Sequelize from "../db.js";
import Clients from "./Clients.js";

const Chantier = Sequelize.define(
    "Chantier",
    {
        id_chantier: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        titre: {
            type: DataTypes.STRING(30),
            allownull: false,
        },

        description: {
            type: DataTypes.STRING(30),
            allownull: false,
        },
        date_debut: {
            type: DataTypes.DATE,
            allownull: false,
        },
        date_fin: {
            type: DataTypes.DATE,
            allownull: false,
        },
      id_client: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Clients",
          key: "id_client",
        },
      },
   
    
     
    }
);
 
export default Chantier;