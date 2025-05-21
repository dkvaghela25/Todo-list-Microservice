const express = require('express');

const { userRouter } = require('./routes/user');

const apiRouter = express.Router();

apiRouter.use('/user', userRouter)

module.exports = {
    apiRouter
}