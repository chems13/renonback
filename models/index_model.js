import Clients from "./Clients.js";
import Chantier from "./Chantier.js";
import Devis from "./Devis.js";
import Commentaire from "./Commentaire.js";

// Clients -> Chantier
Clients.hasMany(Chantier, { foreignKey: "id_client" });
Chantier.belongsTo(Clients, { foreignKey: "id_client" });

// Chantier -> Devis
Chantier.hasMany(Devis, { foreignKey: "id_chantier" });
Devis.belongsTo(Chantier, { foreignKey: "id_chantier" });

//Chantier -> Commentaire
Chantier.hasMany(Commentaire, { foreignKey: "id_chantier" });
Commentaire.belongsTo(Chantier, { foreignKey: "id_chantier" });

export { Clients, Chantier, Devis };