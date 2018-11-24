const FtpSvr    = require('ftp-srv')
const ftpServer = new FtpSvr('ftp://127.0.0.1:21')

ftpServer.on('login', function (data, resolve, reject) {
  var connection  = data.connection
  var username    = data.username
  var password    = data.password

  if (data.username == 'anonymous') {
    resolve({ root: 'C:\\Users\\10579\\Desktop\\ftp\\服务器root目录' })
  } else {
    reject()
  }
})

ftpServer
  .listen()
  .then(() => {
    console.log('ready')
  })