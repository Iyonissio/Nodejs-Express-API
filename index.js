import express from 'express';
import bodyParser from 'body-parser';

import usersRouters from './routers/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', usersRouters);

app.get('/', (req, res) => {
    console.log('[TEST]!');
    res.send('Ola from Homepage.');
});

app.listen(PORT, () => console.log(`Servidor na Porta ${PORT}`));
