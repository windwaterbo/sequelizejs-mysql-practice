require('rootpath')();
const db = require('model');
const owner = [
  {
    name: 'Macy',
    year: 23
  }, {
    name: 'Takuma',
    year: 99
  }, {
    name: 'Candy',
    year: 13
  }, {
    name: 'KT',
    year: 20
  }, {
    name: 'HONNE',
    year: 18
  }, {
    name: 'FKJ',
    year: 21
  }, {
    name: 'Tom Misch',
    year: 19
  }, {
    name: 'The XX',
    year: 20
  }, {
    name: 'John Mayer',
    year: 12
  }, {
    name: 'Clark',
    year: 11
  }, {
    name: 'Bloom',
    year: 23
  }];

db.Owner.bulkCreate(owner, {
  updateOnDuplicate: ['name', 'year']
});

//Fields to update if row key already exists (on duplicate key update)? (only supported by mysql). By default, all fields are updated.