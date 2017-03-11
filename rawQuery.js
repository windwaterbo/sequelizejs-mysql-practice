require('rootpath')();
const db = require('model');
const Promise = db.sequelize.Promise;

const getIntIdGap = (table) => {
  const getIntIdGapSql = 'SELECT (t1.id + 1) as gap_starts_at,(SELECT MIN(t3.id) -1 FROM ' + table + ' t3 WHERE t3.id > t1.id) as gap_ends_at FROM ' + table + '  t1 WHERE NOT EXISTS (SELECT t2.id FROM ' + table + ' t2 WHERE t2.id = t1.id + 1) HAVING gap_ends_at IS NOT NULL LIMIT 10'
  return new Promise(function(resolve, reject) {
    db.sequelize.query(getIntIdGapSql,
    {
      type: db.sequelize.QueryTypes.SELECT
    }).then((gapData) => {
      gapData.forEach((gapObj) => {
        gapObj.count = 0;
      });
      resolve(gapData);
    });
  });
};

getIntIdGap('CatInfo').then((idGap) => { 
  console.log('####### idGap of CatInfo #######')
  console.log(idGap);
})