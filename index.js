import expres from "express";
import dotenv from "dotenv";
import sequelize from "./db.js";
import "./models/index_model.js";
import ClientsRouter from "./routes/Client.route.js";
import  ChantierRouter from "./routes/Chantier.route.js";  
import DevisRouter from "./routes/Devis.route.js";   
import CommentaireRouter from "./routes/Commentaire.route.js";
import cors from "cors";




dotenv.config();

const app = expres();

app.use(cors()); // en mode dev

// app.use(cors({
//     origin:"http://Renover.fr","localhost:5137" //en mode prod
// }));

app.use(expres.json());

app.use("/client", ClientsRouter);

app.use("/chantier", ChantierRouter);

app.use("/devis", DevisRouter);

app.use("/commentaire", CommentaireRouter);





sequelize.sync().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`port : http://localhost:4000`);
        
    });
});