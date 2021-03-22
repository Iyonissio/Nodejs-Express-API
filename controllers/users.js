export const createUser = (req, res) => {
    const user = req.body;
    
    // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    users.push({... user, id: uuidv4()});

    res.send(`User ${user.nome} adicionado a base de Dados`);
}

export const getUser = (req, res) => {
    console.log(users);
    res.send(users);
}