import express from "express";
import pkg from 'body-parser';
import router from "./routes/router.js";

import sequelize from "./utils/database.js";
import association from "./models/Associations.js";
//esses imports são para criar o banco de dados com associações
import cors from "cors";

const app = express();
const { json, urlencoded } = pkg;


app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

(async () => {
    try {
        association.associations();
        await sequelize.sync();
        app.listen(3000, function () {
            console.log("Listening to port 3000");
        });
    } catch (err) {
        console.log(err);
    }
})();
//aqui preparamos o nosso index para ter a inicialização so sequelize antes de começar a disponibilizar a aplicação.
app.use("/", router);