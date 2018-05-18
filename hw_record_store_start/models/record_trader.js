const RecordTrader = function(name) {
  this.name = name;
  this.funds = 0;
  this.recordCollection = [];

};

RecordTrader.prototype.addFunds = function(amount) {
  this.funds += amount;
}

RecordTrader.prototype.addRecordToCollection = function(record) {
  this.recordCollection.push(record);
}

RecordTrader.prototype.findSingleRecordByTitle = function(title) {
  return this.recordCollection.find((record) => {
    if (record.title === title) {
      return record;
    }
  });
}

RecordTrader.prototype.removeRecordFromCollection = function(record) {

  let updatedCollection = []

  this.recordCollection.forEach((singleRecord) => {
    if (singleRecord !== record) {
    updatedCollection.push(singleRecord);
    }
  });

  this.recordCollection = updatedCollection;
}

RecordTrader.prototype.hasRecord = function(record) {
  return this.recordCollection.includes(record);

}

RecordTrader.prototype.sellRecord = function(record) {

  if (this.hasRecord(record)) {
    this.removeRecordFromCollection(record);
    this.addFunds(record.price);
    return record;
  }
}


module.exports = RecordTrader;
