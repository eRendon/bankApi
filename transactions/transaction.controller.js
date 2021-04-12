const express = require('express')
const router = express.Router()
const transactionService = require('./transaction.service')
const authorize = require('_middleware/authorize')

router.post('/create', authorize(), createTransaction)

module.exports = router

function createTransaction(req, res, next) {
    transactionService.createTransaction(req.body)
        .then((data) => res.json(
            data
        ))
        .catch(next)
}
