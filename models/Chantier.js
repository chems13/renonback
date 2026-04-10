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
           allowNull : false,
        },

        description: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        date_debut: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_fin: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        statut: {
            type: DataTypes.STRING(30),
           allowNull : false,
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