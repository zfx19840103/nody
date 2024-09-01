import db from '../db/index.js'
export function userGet(req, res) {
  var sql = 'select * from users_kepule'//注意，这里选择你自己的数据表名
  db.query(sql, (err, data) => {
    if (err) {
      return res.send('错误：' + err)
    }
    res.send(data)
  })
}