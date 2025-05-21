const express = require('express');

const { todoRouter } = require('./routes/todo');

const apiRouter = express.Router();

apiRouter.use('/todo', todoRouter)

module.exports = {
    apiRouter
}