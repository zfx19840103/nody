import db from "../db/index.js";
import bcrypt from "bcryptjs";
import { ar } from "element-plus/es/locales.mjs";
import jwt from "jsonwebtoken";

export function home_kepule(req, res) {
  var sql = "SELECT * FROM home_kepule"; //注意，这里选择你自己的数据表名
  db.query(sql, (err, results) => {
    console.log(results);
    if (err) {
      return res.send("错误：" + err);
    } else if (results.length == 0) {
      return res.send("数据为空");
    } else {
      return res.status(200).send({
        code: 0,
        data: {
          text_large: results[0].text_large,
          text_font: results[0].text_font,
          text_h2: results[0].text_h2,
          text_p: results[0].text_p,
          home_banner: results[0].home_banner,
        },
        message: "登录成功"
      });
    }
  });
}

export function users_kepule(req, res) {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM users_kepule WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        return res.status(500).send("数据库错误：" + err);
      }
      if (results.length > 0) {
        const user = results[0];
        if (password === user.password) {
          return res.status(200).send({
            code: 0,
            data: {
              token: jwt.sign({ username: user.username }, "your_secret_key", {
                expiresIn: "1h"
              })
            },
            message: "登录成功"
          });
        } else {
          return res.status(200).send("密码错误");
        }
      } else {
        return res.status(401).send("用户不存在");
      }
    }
  );
}

export function contact_kepule(req, res) {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO contact_kepule (name, email, message) VALUES (?,?,?)";
  const params = [name, email, message];
  db.query(sql, params, (err, results) => {
    if (err) {
      return res.status(500).send("数据库错误：" + err);
    }
    return res.status(200).send("提交成功");
}