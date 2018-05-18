const RecordCollector = require('../record_collector.js');
const RecordTrader = require('../record_trader.js');
const Record = require('../record.js');
const assert = require('assert');

describe('RecordCollector', function () {
  let recordCollector;

  beforeEach(function () {
    recordCollector = new RecordCollector('Anna', 'rock');
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
    assert.strictEqual(recordCollector.name, 'Anna');
  });

  it('should have no funds', function () {
    assert.strictEqual(recordCollector.funds, 0);
  });

  it('should have an empty collection of records', function () {
    assert.deepStrictEqual(recordCollector.recordCollection, []);
  });

  it('should have a favourite genre', function () {
    assert.deepStrictEqual(recordCollector.favouriteGenre, 'rock');
  });


  it('should be able to add funds', function () {
      recordCollector.addFunds(50);
      assert.strictEqual(recordCollector.funds, 50);
  });

  it('should be able to remove funds', function () {
      recordCollector.addFunds(50);
      recordCollector.removeFunds(20);
      assert.strictEqual(recordCollector.funds, 30);
  });

  it('should only be able to remove as much funds as they possess', function () {
      recordCollector.addFunds(10);
      recordCollector.removeFunds(20);
      assert.strictEqual(recordCollector.funds, 0);
  });

  it('should be able to add record to collection', function () {
      recordCollector.addRecordToCollection(record1);
      assert.strictEqual(recordCollector.recordCollection.length, 1);
    });

  it('should be able to buy a record if they have enough funds', function () {
      recordCollector.addRecordToCollection(record1);
      recordCollector.addRecordToCollection(record2);
      recordCollector.addRecordToCollection(record3);

      recordCollector.addFunds(50);

      recordCollector.buyRecord(record4);

      assert.strictEqual(recordCollector.recordCollection.length, 4);
    });

  it('should not be able to buy a record if they don\'t have enough funds', function () {
      recordCollector.addRecordToCollection(record1);
      recordCollector.addRecordToCollection(record2);
      recordCollector.addRecordToCollection(record3);


      recordCollector.buyRecord(record4);

      assert.strictEqual(recordCollector.recordCollection.length, 3);
    });

  it('should be able to sort collection by artist name', function () {
      recordCollector.addRecordToCollection(record1);
      recordCollector.addRecordToCollection(record2);
      recordCollector.addRecordToCollection(record3);
      recordCollector.addRecordToCollection(record4);


      recordCollector.sortCollectionByArtistName();

      assert.deepStrictEqual(recordCollector.recordCollection, [record1, record4, record3, record2]);
    });


});
