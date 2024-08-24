import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import router from './router';

const app = express();

app.use(bodyParser.json());  //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());              //配置跨域
// app.use(router);              //配置路由

app.listen(80, () => {
    console.log('服务器启动成功');
});
