const dotenv = require('dotenv');
const { Server } = require('./server/server');
dotenv.config();

const server = new Server();
server.listen();