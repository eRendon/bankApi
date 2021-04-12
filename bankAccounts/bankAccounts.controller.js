const express = require('express');
const router = express.Router();
const bankAccountService = require('./bankAccount.service');
const authorize = require('_middleware/authorize')

router.post('/create', authorize(), createBankAccount);
router.get('/getAll/:userId', authorize(), getAll);

module.exports = router;

function createBankAccount(req, res, next) {
    bankAccountService.createAccount(req.body)
        .then((data) => res.json({
            data
        }))
        .catch(next)
}

function getAll(req, res, next) {
    console.log("getAll", req.params)
    bankAccountService.getAll(req.params.userId)
        .then(bankAccount => res.json(bankAccount))
        .catch(next);
}
