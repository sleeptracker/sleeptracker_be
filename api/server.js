// getting express and hooking it to the server
const express = require('express');
const server = express();

// configuring env
require('dotenv').config();

// pulling in 
const cors = require('cors');
const helmet = require('helmet');

const restricted = require('../auth/restricted.js');

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/restricted/users', restricted, usersRouter);
server.use('/api/auth', authRouter);

// sending server response
server.get('/', (req, res) => {
  res.status(200).json({ api: 'we are up and running' });
});

module.exports = server;