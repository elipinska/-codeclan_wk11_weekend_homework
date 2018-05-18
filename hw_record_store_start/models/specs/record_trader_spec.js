const RecordTrader = require('../record_trader.js');
const Record = require('../record.js');
const assert = require('assert');

describe('RecordTrader', function () {
  let recordTrader;

  beforeEach(function () {
    recordTrader = new RecordTrader('Sam');
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

  it('should have a name', function () {
    assert.strictEqual(recordTrader.name, 'Sam');
  });

  it('should have no funds', function () {
    assert.strictEqual(recordTrader.funds, 0);
  });

  it('should have an empty collection of records', function () {
    assert.deepStrictEqual(recordTrader.recordCollection, []);
  });

  it('should be able to add funds', function () {
    recordTrader.addFunds(50);
    assert.strictEqual(recordTrader.funds, 50);
  });

  it('should be able to add record to collection', function () {
    recordTrader.addRecordToCollection(record1);
    assert.strictEqual(recordTrader.recordCollection.length, 1);
  });

  it('should be able to find a record by title', function () {
    recordTrader.addRecordToCollection(record1);
    recordTrader.addRecordToCollection(record2);
    recordTrader.addRecordToCollection(record3);
    recordTrader.addRecordToCollection(record4);
    const actual = recordTrader.findRecordByTitle('Evelyn Evelyn');
    assert.deepStrictEqual(actual, [record1]);
  });

  it('should be able to remove a record from collection', function () {
    recordTrader.addRecordToCollection(record1);
    recordTrader.addRecordToCollection(record2);
    recordTrader.addRecordToCollection(record3);
    recordTrader.addRecordToCollection(record4);
    recordTrader.removeRecordFromCollection(record2);

    assert.strictEqual(recordTrader.recordCollection.length, 3);
  });

  it('should be able to sell a record if they have it', function () {
    recordTrader.addRecordToCollection(record1);
    recordTrader.addRecordToCollection(record2);
    recordTrader.addRecordToCollection(record3);
    recordTrader.addRecordToCollection(record4);
    const actual = recordTrader.sellRecord(record3);

    assert.strictEqual(recordTrader.recordCollection.length, 3);
    assert.strictEqual(actual, record3);
  });

  it('shouldn\'t be able to sell a record if they don\'t have it', function () {
    recordTrader.addRecordToCollection(record1);
    recordTrader.addRecordToCollection(record2);
    recordTrader.addRecordToCollection(record3);
    const actual = recordTrader.sellRecord(record4);

    assert.strictEqual(recordTrader.recordCollection.length, 3);
    assert.strictEqual(actual, undefined);
  });


});
