import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {

        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - ERRO AO ENCONTRAR LIVROS` });
        }
    }

    static async cadastrarLivro(req, res) {

        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {... novoLivro, autor: { ...autorEncontrado._doc }};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).send({ message: "criado com sucesso", livro: livroCriado });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - FALHA AO CADASTRAR LIVRO`
            });
        }
    }

    static async listaLivroPorId(req, res) {

        try {
            const livroEncontrado = await livro.findById(req.params.id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - ERRO AO ENCONTRAR LIVRO POR ID` });
        }


    }

    static async atualizarLivrosPorId(req, res) {

        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - ERRO AO ATUALIZAR O LIVRO` });
        }


    }

    static async excluirLivros(req, res) {

        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findByIdAndDelete(id);
            res.status(204);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - ERRO AO EXCLUIR LIVRO POR ID` });
        }


    }

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;

        try {
            
            const livrosPorEditoras = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditoras);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - FALHA NA BUSCA` });
        }

    }

};

export default LivroController;

