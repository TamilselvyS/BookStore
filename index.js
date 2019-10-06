const fs = require('fs');
const http = require('http');

//CREATE A SERVER
const server = http.createServer((req, res)=>{
    const pathName = req.url;
    //BOOK LIST PAGE
    if(pathName === '/' || pathName === '/bookslist')
    {
        res.end('home page list');
    }
    else if (pathName === '/details'){
        res.end('detail page');
    }
    else if (pathName === '/api')
    {
        res.writeHead(200, {'Content-type' : 'application/json'});
        res.end('api');
    }
    else {
        res.writeHead(404, {'Content-type' : 'text/html', 'Own-header': 'test'});
        res.end("<h1>Not found!</h1>");
    }
});


//START THE SERVER
server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to request on port 8000');
});