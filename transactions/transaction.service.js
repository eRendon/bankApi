const db = require('_helpers/db')

module.exports = {
    createTransaction
}

async function createTransaction(params) {

    const bankAccount = await db.BankAccount.findOne({ were: { accountNumber: params.to}})
    if (!bankAccount) {
        throw 'Account destiny, no exist.'
    }
    const transaction = new db.Transaction({
        from: params.from,
        to: params.to,
        balance: params.balance,
        userFrom: params.userId,
        userTo: bankAccount.accountId,
        currency: params.currency,
        description: params.description
    })

    await transaction.save()

    return detail(transaction)
}

function detail(transaction) {
    const { from, to, balance, createAt, updatedAt, userFrom, userTo, description, currency, id } = transaction
    return { from, to, balance, createAt, updatedAt, userFrom, userTo, description, currency, id }
}
