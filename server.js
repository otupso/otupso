const express = require('express');
const app = express();
const port = 8888 || process.env.PORT;

app.use(require('cors')());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    //res.json({log: 'Funcionando...'});
});

app.post('/cadastro', (req, res) => {
    const user = [];

    console.log('Recebido!')
    user.push({
        name: req.body.name,
        lastName: req.body.lastName
    });
    res.json(({message: 'Tá indo...', data: user}));
});

app.listen(port, () => (
    console.log(`Open in http://localhost:${port}`)
));