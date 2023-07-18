require('dotenv').config();
const http = require('http');
const app = require('./app/app');
const PORT = process.env.PORT || 4444;

console.log('server.js: process.env.PORT', process.env.PORT);

const server = http.createServer(app);


server.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});