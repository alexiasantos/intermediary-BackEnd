//este arquivo router irá disponibilizar para nosso frontend as rotas que o backend tem disponível para acontecer o relacionamento do app na web

import express from "express";
//chamei o express
let router = express.Router();
//mapeamento das rotas
import userController from "./UserController.js";
import teacherController from "./TeacherController.js";
import evaluationController from "./EvaluationController.js";
import courseController from "./CourseController.js";
//nossas rotas estão nos controllers.

router.get("/", function (req, res) {
  console.log("hi!");
  res.status(200).json({ message: "hi!" });
});
//começo da nossa aplicação. Faz um get no barra e espera uma requisição/resposta
router.use("/", userController);
router.use("/", teacherController);
router.use("/", evaluationController);
router.use("/", courseController);
//aqui fazemos o router "usar" nossos controllers, todos os controllers começarão pela raiz o "/"

export default router;