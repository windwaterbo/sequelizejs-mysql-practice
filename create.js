require('rootpath')();
const db = require('model');

db.CatInfo.create({
  OwnerId: 1,
  nickName: 'bubu',
  CatId: 1
});