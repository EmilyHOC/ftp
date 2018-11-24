 var ClientUpload = require('ftp');
  var fs = require('fs');

  var c = new ClientUpload();
  c.on('ready', function() {
      c.put('C:\\Users\\10579\\Desktop\\ftp\\客户端目录\\客户端要上传的文本.txt', '服务器接收到的文本.txt', function(err) {
          if (err) throw err;
          c.end();
      });
  });
  // connect to localhost:21 as anonymous
  c.connect();