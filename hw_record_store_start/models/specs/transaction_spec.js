const Transaction = require('../transaction.js');
const RecordTrader = require('../record_trader.js');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');
const RecordCollector = require('../record_collector.js');

const assert = require('assert');

describe('Transaction', function () {
  let transaction;

  beforeEach(function() {
    recordCollector = new RecordCollector('Anna', 'rock');
    recordStore = new RecordStore('Unknown Pleasures');
    transaction = new Transaction(recordCollector, recordStore);


    record1 = new Record({
              title: 'Evelyn Evelyn',
              artist: 'Amanda Palmer',
              genre: 'cabaret',
              price: 30
            });
    record2 = new Record({
              title: 'Wind in the Wires',
              artist: 'Patrick Wolf',
              genre: 'alternative',
              price: 25
            });
    record3 = new Record({
              title: 'Master of Puppets',
              artist: 'Metallica',
              genre: 'metal',
              price: 15
            });
    record4 = new Record({
              title: 'Hunky Dory',
              artist: 'David Bowie',
              genre: 'rock',
              price: 45
            });
  });

  it('should have a buyer', function () {
    assert.strictEqual(transaction.buyer, recordCollector);
  });

  it('should have a seller', function () {
    assert.strictEqual(transaction.seller, recordStore);
  });

  it('should be able to handle a transaction', function () {
    recordStore.addRecordToCollection(record1);
    recordStore.addRecordToCollection(record2);
    recordStore.addRecordToCollection(record3);
    recordStore.addRecordToCollection(record4);
    recordCollector.addFunds(50);
    transaction.sellRecordToBuyer(record3);
    assert.strictEqual(recordStore.recordCollection.length, 3);
    assert.strictEqual(recordCollector.recordCollection.length, 1);
  });

  it('cannot conduct transaction if the buyer has insufficient funds', function () {
    recordStore.addRecordToCollection(record1);
    recordStore.addRecordToCollection(record2);
    recordStore.addRecordToCollection(record3);
    recordStore.addRecordToCollection(record4);
    transaction.sellRecordToBuyer(record3);
    assert.strictEqual(recordStore.recordCollection.length, 4);
    assert.strictEqual(recordCollector.recordCollection.length, 0);
  });

  it('cannot conduct transaction if the seller does not have the record', function () {
    recordStore.addRecordToCollection(record1);
    recordStore.addRecordToCollection(record2);
    recordStore.addRecordToCollection(record4);
    transaction.sellRecordToBuyer(record3);
    assert.strictEqual(recordStore.recordCollection.length, 3);
    assert.strictEqual(recordCollector.recordCollection.length, 0);
  });

});
