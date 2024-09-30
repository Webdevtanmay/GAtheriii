var http = require ("http");
http.createServer(function(reqest,response){
    response.write(" Server Side");
    response.end();
}).listen(3070);