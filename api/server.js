const express = require('express');
const server = express();
require('dotenv').config();

const cors = require('cors');
const helmet = require('helmet');

const restricted = require('../auth/restricted.js');

server.use(express.json());
server.use(helmet());
server.use(cors());


server.get('/', (req, res) => {
    res.status(200).json({ api: 'we are up and running' });
  });

module.exports = server;