require('rootpath')();
const db = require('model');

db.Owner.findAll({
  attributes: ['id', 'name'],
  include: [{
    model: db.CatInfo,
    attributes: ['id', 'nickName', 'year'],
    where: {
      OwnerId:db.Sequelize.col('Owner.id')
    }
  }],
  raw:true
}).then((familyInfo) => { 
  console.log('#### family info ####')
  console.log(familyInfo)
})