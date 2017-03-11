require('rootpath')();
const db = require('model');

db.CatInfo.findOrCreate({
  where: {
    OwnerId: 1,
    nickName: 'bubu',
    CatId: 1
  },
  defaults: {
    nickName: 'bubu',
    year: 1,
    CatId: 1
  }
})