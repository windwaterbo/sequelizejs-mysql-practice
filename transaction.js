require('rootpath')();
const db = require('model');

return db.sequelize.transaction((t) => {
  return db.CatInfo.destroy({
    where: {
      OwnerId: 1,
      nickNum: 'bubu',
    },
  }, {
    transaction: t
  }).then((sourceDeleted) => {
    if (sourceDeleted === 1) {
      console.log('##### delete success #####');
    } else {
      console.log('##### ohohohoho ######');
    }
  });
}).then((result) => {
  return;
}).catch((err) => {
  console.log('drama transaction err :: ', err);
  return;
});