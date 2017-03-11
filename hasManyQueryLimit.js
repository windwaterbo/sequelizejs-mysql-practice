require('rootpath')();
const db = require('model');

// get toys infomation what cats have it. 
db.Toys.findAll({
  attributes: ['id', 'name'],
  // limit:1,
  include: [{
    model: db.CatToys,
    attributes: ['CatInfoId', 'ToyId'],
    where: {
      ToyId: db.Sequelize.col('CatToys.ToyId')
    },
    include: [{
      model: db.CatInfo,
      // limit:1,
      attributes: ['id', 'nickName', 'year'],
      where: {
        id: db.Sequelize.col('CatToys.CatInfoId')
      }
    }]
  },],
  raw:true
}).then((CatToysInfo) => {
  // if you want to get catInfo limit. you will get error.
  // Unhandled rejection Error: Only HasMany associations support include.separate
  // HasMany associations support not support limit
  // if limit:1 at level of Toys, it's generate as follow.
  // SELECT `CatToys`.*, `CatInfo`.`id` AS `CatInfo.id`, `CatInfo`.`nickName` AS `CatInfo.nickName`, `CatInfo`.`year` AS `CatInfo.year` FROM ((SELECT `id`, `CatInfoId`, `ToyId` FROM `CatToys` AS `CatToys` WHERE (`CatToys`.`ToyId`) AND `CatToys`.`ToyId` = 1 LIMIT 1) UNION ALL (SELECT `id`, `CatInfoId`, `ToyId` FROM `CatToys` AS `CatToys` WHERE (`CatToys`.`ToyId`) AND `CatToys`.`ToyId` = 2 LIMIT 1) UNION ALL (SELECT `id`, `CatInfoId`, `ToyId` FROM `CatToys` AS `CatToys` WHERE (`CatToys`.`ToyId`) AND `CatToys`.`ToyId` = 3 LIMIT 1) UNION ALL (SELECT `id`, `CatInfoId`, `ToyId` FROM `CatToys` AS `CatToys` WHERE (`CatToys`.`ToyId`) AND `CatToys`.`ToyId` = 4 LIMIT 1) UNION ALL (SELECT `id`, `CatInfoId`, `ToyId` FROM `CatToys` AS `CatToys` WHERE (`CatToys`.`ToyId`) AND `CatToys`.`ToyId` = 5 LIMIT 1) UNION ALL (SELECT `id`, `CatInfoId`, `ToyId` FROM `CatToys` AS `CatToys` WHERE (`CatToys`.`ToyId`) AND `CatToys`.`ToyId` = 6 LIMIT 1) UNION ALL (SELECT `id`, `CatInfoId`, `ToyId` FROM `CatToys` AS `CatToys` WHERE (`CatToys`.`ToyId`) AND `CatToys`.`ToyId` = 7 LIMIT 1) UNION ALL (SELECT `id`, `CatInfoId`, `ToyId` FROM `CatToys` AS `CatToys` WHERE (`CatToys`.`ToyId`) AND `CatToys`.`ToyId` = 8 LIMIT 1) UNION ALL (SELECT `id`, `CatInfoId`, `ToyId` FROM `CatToys` AS `CatToys` WHERE (`CatToys`.`ToyId`) AND `CatToys`.`ToyId` = 11 LIMIT 1)) AS `CatToys` INNER JOIN `CatInfo` AS `CatInfo` ON `CatToys`.`CatInfoId` = `CatInfo`.`id` AND `CatToys`.`CatInfoId`; 
  // but you really want...
  // SELECT `Toys`.`id`, `Toys`.`name`, `CatToys`.`CatInfoId` AS `CatToys.CatInfoId`, `CatToys`.`ToyId` AS `CatToys.ToyId`, `CatToys.CatInfo`.`id` AS `CatToys.CatInfo.id`, `CatToys.CatInfo`.`nickName` AS `CatToys.CatInfo.nickName`, `CatToys.CatInfo`.`year` AS `CatToys.CatInfo.year` FROM `Toys` AS `Toys` INNER JOIN `CatToys` AS `CatToys` ON `Toys`.`id` = `CatToys`.`ToyId` AND `CatToys`.`ToyId` INNER JOIN `CatInfo` AS `CatToys.CatInfo` ON `CatToys`.`CatInfoId` = `CatToys.CatInfo`.`id` AND `CatToys`.`CatInfoId` Limit 1
  console.log('#### CatToysInfo info ####')
  console.log(CatToysInfo)
  console.log('#### Use the slice to achieve the result of (offset,limit) ');
  console.log(CatToysInfo.slice(4,6))
  })


// db.CatToys.findAll({
//   attributes: ['CatInfoId', 'ToyId'],
//   include: [{
//       model: db.CatInfo,
//       attributes: ['id', 'nickName'],
//       where: {
//         id: db.Sequelize.col('CatToys.CatInfoId')
//       }
//     },
//     {
//       model: db.Toys,
//       attributes: ['name', 'expirationDate'],
//       where: {
//         id: db.Sequelize.col('CatToys.ToyId')
//       }
//     }
//   ],
//   raw: true
// }).then((CatToysInfo) => {
//   console.log('##########################')
//   console.log('#### CatToysInfo info ####')
//   console.log(CatToysInfo)
//   })
