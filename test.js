var https = require('https')
    ,fs = require("fs");

var options = {
    key: fs.readFileSync('./3102811_wujf.work.key'),
    cert: fs.readFileSync('./3102811_wujf.work.pem')
};

https.createServer(options, async (req,res)=>{
    res.writeHead(200);
    res.end('h w');
}).listen(443, function () {
    console.log('Https server listening on port ' + 443);
});