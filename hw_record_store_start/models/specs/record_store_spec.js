const RecordStore = require('../record_store.js');
const RecordTrader = require('../record_trader.js');
const Record = require('../record.js');
const assert = require('assert');

describe('RecordStore', function () {
  let recordStore;

  beforeEach(function () {
    recordStore = new RecordStore('Unknown Pleasures');

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
    assert.strictEqual(recordStore.name, 'Unknown Pleasures');
  });

  it('should have no funds', function () {
    assert.strictEqual(recordStore.funds, 0);
  });

  it('should have an empty collection of records', function () {
    assert.deepStrictEqual(recordStore.recordCollection, []);
  });

  it('should be able to add funds', function () {
      recordStore.addFunds(50);
      assert.strictEqual(recordStore.funds, 50);
  });

  it('should be able to add record to collection', function () {
      recordStore.addRecordToCollection(record1);
      assert.strictEqual(recordStore.recordCollection.length, 1);
    });



    it('should be able to remove a record from collection', function () {
      recordStore.addRecordToCollection(record1);
      recordStore.addRecordToCollection(record2);
      recordStore.addRecordToCollection(record3);
      recordStore.addRecordToCollection(record4);
      recordStore.removeRecordFromCollection(record2);

      assert.strictEqual(recordStore.recordCollection.length, 3);
    });

    it('should be able to sell a record if they have it', function () {
      recordStore.addRecordToCollection(record1);
      recordStore.addRecordToCollection(record2);
      recordStore.addRecordToCollection(record3);
      recordStore.addRecordToCollection(record4);
      const actual = recordStore.sellRecord(record3);

      assert.strictEqual(recordStore.recordCollection.length, 3);
      assert.strictEqual(actual, record3);
    });

});
