import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    {
        nome: "Iyonissio",
        sobrenome: "Daniel",
        idade: 22
    },
    {
        nome: "Ansha",
        sobrenome: "Cambaco",
        idade: 21
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send("helllo");
});

router.post('/', (req, res) => {
    const user = req.body;
    
    // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    users.push({... user, id: uuidv4()});

    res.send(`User ${user.nome} adicionado a base de Dados`);
});

export default router;