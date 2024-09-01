import { createPool } from 'mysql'
let db = createPool({
  host: 'localhost', //数据库IP地址
  user: 'root', //数据库登录账号，
  password: '123456', //数据库登录密码
  database: 'nody', //要操作的数据库
})
 
export default db