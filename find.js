require('rootpath')()
const db = require('model')

db.Cat.findAll({}).then((catList) => {
  console.log('Cat list : ', catList)
})

db.Cat.findAll({ raw: true }).then((catList) => {
  console.log('####### raw: true #######')
  console.log('Cat list : ', catList)
})