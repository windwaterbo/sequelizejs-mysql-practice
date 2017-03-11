require('rootpath')();
const db = require('model');

db.CatInfo.update({
  year: 2,
}, {
  where: {
    OwnerId: 1,
    nickName: 'bubu',
    CatId: 1
  }
});