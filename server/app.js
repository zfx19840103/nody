import express from 'express'
let app = express()
import cors from 'cors'
import bodyParser from 'body-parser'
 
import router from './router.js'
 
app.use(bodyParser.json()) //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors()) //配置跨域，必须在路由之前
app.use(router)
 
app.listen(3000, () => {
  console.log('服务器启动成功，监听端口3000')
})