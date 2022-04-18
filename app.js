const express = require('express');
const userService = require('./user.service');

const app = express();

app.get('/', (req, res) => {
    const html = `
    <h1>Api de usuarios</h1>
    <ul>
        <li><a href="/api/users">users con metodo then</a></li>
        <li><a href="/apiv2/users">users con metodo await</a></li>
    </ul>
    `;

    res.send(html);
});

app.get('/api/users', (req, res) => {
    userService.getAllUsers()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send('algo salio mal, Detalle: ' + err);
        });
});

app.get('/apiv2/users', async(req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
});

app.get('/api/users/:id', async(req, res) => {
    const user = await userService.getUserById(req.params.id);
    if(user !== null) 
        res.json(user);
    else
        res.send('No existe el usuario');
});

module.exports = app;