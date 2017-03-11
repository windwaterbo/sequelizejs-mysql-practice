require('rootpath')();
const db = require('model');
const moment = require('moment');

// if your server time is UTC time,
db.Toys.create({
  name: 'jump jump',
  expirationDate: moment('2017-05-15 17:20:00').toISOString()
});