const db = require('_helpers/db');

module.exports = {
    createAccount,
    getAll
}

async function createAccount(params) {
    if (await db.BankAccount.findOne({ where : { alias: params.alias }})) {
        throw 'Account already exist'
    }
    const account = await db.Account.findOne({ where: { id: params.userId }});
    console.log("cuenta", account)
    const bankAccount = new db.BankAccount({
        accountNumber: makeAccountId(),
        alias: params.alias,
        description: params.description,
        accountId: account.id,
        type: params.type
    })

    await bankAccount.save();

    return detail(bankAccount);
}

async function getAll(id) {
    console.log("bankAccount", id)
    const bankAccount = await db.BankAccount.findAll({ where: { accountId: id}})
    console.log("bankAccount", bankAccount)
    return bankAccount.map(x => detail(x));
}

function detail(bankAccount) {
    const { accountNumber, alias, description, created, updated, balance, type } = bankAccount;
    return { accountNumber, alias, description, created, updated, balance, type };
}

function makeAccountId() {
    const result = [];
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789${new Date().getDate()}`;
    const charactersLength = characters.length;
    for (let i = 0; i < 20; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}
