const RecordTrader = require('./record_trader.js');

const RecordStore = function(name) {
  RecordTrader.call(this, name);

}

RecordStore.prototype = Object.create(RecordTrader.prototype);

RecordStore.prototype.constructor = RecordStore;



module.exports = RecordStore;
