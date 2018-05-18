const RecordTrader = require('./record_trader.js');

const RecordStore = function(name) {
  RecordTrader.call(this, name);

}

RecordStore.prototype = Object.create(RecordTrader.prototype);

RecordStore.prototype.constructor = RecordStore;

// should be able to find all records which match a given genre
RecordStore.prototype.findRecordsByGenre = function(genre) {
  return this.recordCollection.filter(record => record.genre === genre);
};

// should be able to find all records which match a given title
RecordStore.prototype.findRecordsByTitle = function(title) {
  return this.recordCollection.filter(record => record.title === title);
};

// should be able to find all records which match a given artist
RecordStore.prototype.findRecordsByArtist = function(artist) {
  return this.recordCollection.filter(record => record.artist === artist);
};

// should be able to find all records which match on multiple attributes
RecordStore.prototype.findRecordsByAttributes = function(query) {

  let attributeTypes = Object.keys(query);

  return this.recordCollection.filter((record) => {
    return attributeTypes.every((attribute) => {
      return record[attribute] === query[attribute];
    });
  });
};



module.exports = RecordStore;
