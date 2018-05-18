const RecordTrader = require('./record_trader.js');

const RecordCollector = function(name, favouriteGenre) {
  RecordTrader.call(this, name);
  this.favouriteGenre = favouriteGenre;

}

RecordCollector.prototype = Object.create(RecordTrader.prototype);

RecordCollector.prototype.constructor = RecordCollector;

RecordCollector.prototype.hasEnoughFunds = function(amount) {
  return this.funds >= amount;
}

RecordCollector.prototype.removeFunds = function(amount) {
  if (this.hasEnoughFunds(amount)) {
  this.funds -= amount;
  } else {
    this.funds = 0;
  }
}

RecordCollector.prototype.buyRecord = function(record) {
  if (this.funds >= record.price) {
  this.removeFunds(record.price);
  this.addRecordToCollection(record);
  }
}

RecordCollector.prototype.sortCollectionByArtistName = function() {

    this.recordCollection.sort((record1, record2) => {
  let artistA = record1.artist.toUpperCase();
  let artistB = record2.artist.toUpperCase();
  if (artistA < artistB) {
    return -1;
  }
  if (artistA > artistB) {
    return 1;
  }

  return 0;
  });
}





module.exports = RecordCollector;
