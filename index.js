require('dotenv').config();

const app = require('./app');

port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server on port', port);
});