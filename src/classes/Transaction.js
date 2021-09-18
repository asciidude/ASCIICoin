class Transaction {
    constructor(addr_from, addr_to, amount) {
        this.addr_from = addr_from;
        this.addr_to = addr_to;
        this.amount = amount;
    }
}

module.exports = Transaction;