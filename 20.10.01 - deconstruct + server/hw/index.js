const http = require('http');
const { getClossetBus: newAwasomBusTimes, idan = ()=>{console.log(111)} } = require('./bus-times');
console.log(idan);
const requestListener = function (req, res) {
    if(req.url === '/bus-times'){
        console.log(1111)
        let result = newAwasomBusTimes();
        res.writeHead(200);   
        res.end('Hello, World!');
    }
}

const server = http.createServer(requestListener);
server.listen(8080);