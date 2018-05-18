const Transaction = function (buyer, seller) {
  this.buyer = buyer;
  this.seller = seller;
};

Transaction.prototype.sellRecordToBuyer = function(record) {
  if (this.seller.hasRecord(record) && this.buyer.hasEnoughFunds(record.price)) {
    this.buyer.buyRecord(this.seller.sellRecord(record));
  }
}

module.exports = Transaction;
