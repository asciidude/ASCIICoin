const Blockchain = require('./classes/Blockchain.js');
const Transaction = require('./classes/Transaction.js');

let ASCIICoin = new Blockchain();

ASCIICoin.createTransaction(new Transaction('addr1', 'addr2', 100));
ASCIICoin.createTransaction(new Transaction('addr2', 'addr1', 50));

ASCIICoin.minePendingTransactions('addr3');
ASCIICoin.minePendingTransactions('addr3');

console.log(`Balance addr3: ${ASCIICoin.getAddressBalance('addr3')}`);
console.log(`Balance addr2: ${ASCIICoin.getAddressBalance('addr2')}`);
console.log(`Balance addr1: ${ASCIICoin.getAddressBalance('addr1')}`);