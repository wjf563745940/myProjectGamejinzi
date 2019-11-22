const fs = require('fs')

// 小游戏配置项
const config = {
  appid: 'wx1fb280e1d519f1f9',
  secret: 'e4ca7d4f0924224af71ee4690687d741',

  httpsConfig: {
    key: fs.readFileSync('./3102811_wujf.work.key'),
    cert: fs.readFileSync('./3102811_wujf.work.pem'),
  },

  // 可以用环境变量指定端口，默认 443 2346
  port: process.env.PORT || 443,
}

module.exports = config