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

        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).send({ message: "criado com sucesso", livro: novoLivro });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - FALHA AO CADASTRAR LIVRO`
            });
        }


    }

};

export default LivroController;

