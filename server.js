require("http").createServer(function(req, res){
    var rdm = require('saniya_npm'),
        url   = require("url"),
        qry = url.parse(req.url).query;
        console.log("query " + qry);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rdm(qry)); 
}).listen(8082, "localhost"); 
console.log("Server running at http://localhost:8082/ open this URL in your browser to see its MD5 hash");