import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/:id", LivroController.listaLivroPorId);

routes.post("/livros", LivroController.cadastrarLivro);

routes.put("/livros/:id", LivroController.atualizarLivrosPorId);

routes.delete("/livros/:id", LivroController.excluirLivros);

export default routes;