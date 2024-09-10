import { createPool } from 'mysql'
let db = createPool({
  host: '182.92.186.149', //数据库IP地址
  user: '4_28_form', //数据库登录账号，
  password: 'h7scfjaACX8Lw8HB', //数据库登录密码
  database: '4_28_form' //要操作的数据库
})

export default db