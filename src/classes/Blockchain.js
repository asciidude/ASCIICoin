const Block = require('./Block.js');
const Transaction = require('./Transaction.js');

class Blockchain {
  constructor() {
    this.chain = [this.generateGenesisBlock()];
    this.difficulty = 4;
    this.pendingTransactions = [];
    this.miningReward = 0.00001;
  }

  generateGenesisBlock() {
    return new Block("09/17/2021", "Genesis", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(addr_mineReward) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mineBlock(this.difficulty);

    this.chain.push(block);
    this.pendingTransactions = [
      new Transaction(null, addr_mineReward, this.miningReward)
    ];
  }

  createTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  getAddressBalance(addr) {
    let balance = 0;

    for(const block of this.chain) {
      for(const trans of block.transactions) {
        if(trans.addr_from === addr) {
          balance -= trans.amount;
        }

        if(trans.addr_to === addr) {
          balance += trans.amount;
        }
      }
    }
    
    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i];
      const prev = this.chain[i - 1];

      if(current.hash !== current.generateHash()) return false;
      if(current.prevHash !== prev.hash) return false;
    }

    return true;
  }
}

module.exports = Blockchain;