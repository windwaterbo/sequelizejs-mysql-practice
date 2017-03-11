require('rootpath')();
const db = require('model');

return db.CatInfo.destroy({
  where: {
    OwnerId: 1,
    nickName: 'bubu',
    CatId: 1
  },
  // if your table state is paranoid, you has forced delete data.
  // force: true
}).then((catInfoDeleted) => {
  if (catInfoDeleted === 1) {
    console.log('##### delete success #####');
  } else {
    console.log('##### ohohohoho ######');
  }
  });