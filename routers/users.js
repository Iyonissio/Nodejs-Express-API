import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createUser, getUser } from '../controllers/users.js';

const router = express.Router();

const users = [];

router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id );
    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User com id ${id} deletado da base de dados`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade } = req.body;

    const user = users.find((user) => user.id == id);

    if(nome){
        user.nome = nome;
    }
    if(sobrenome){
        user.sobrenome = sobrenome;
    }
    if(idade){
        user.idade = idade;
    }

    res.send(`Usuario com id: ${id} foi atualizado`);
});


export default router;