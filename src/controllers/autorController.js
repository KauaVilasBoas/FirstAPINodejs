import {autor} from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {

        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - ERRO AO ENCONTRAR AUTORES` });
        }
    }

    static async cadastrarAutor(req, res) {

        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).send({ message: "criado com sucesso", autor: novoAutor});
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - FALHA AO CADASTRAR AUTORES`
            });
        }
    }

    static async listaAutorPorId(req, res) {

        try {
            const autorEncontrado = await autor.findById(req.params.id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - ERRO AO ENCONTRAR AUTOR POR ID` });
        }


    }

    static async atualizarAutorPorId(req, res) {

        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "autor atualizado"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - ERRO AO ATUALIZAR O AUTOR` });
        }


    }

    static async excluirAutor(req, res) {

        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findByIdAndDelete(id);
            res.status(204);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - ERRO AO EXCLUIR AUTOR POR ID` });
        }


    }

};

export default AutorController;

