var Client = require('ftp');
var fs = require('fs');

var c = new Client();
c.on('ready', function() {
    c.get('客户端要下载的文本.txt', function(err, stream) {
        if (err) throw err;
        stream.once('close', function() { c.end(); });
        stream.pipe(fs.createWriteStream('C:\\Users\\10579\\Desktop\\ftp\\客户端目录\\客户端要下载的文本.txt'));
    });
});
// connect to localhost:21 as anonymous
c.connect();