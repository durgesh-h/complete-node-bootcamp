const fs= require('fs');
const http = require('http');
const { type } = require('os');
const url = require('url');


/////////////////////// Server created successfully!! //////////////////////////

const server = http.createServer((req, res)=>{
    pathName = req.url;

    if (pathName=== '/'|| pathName === '/overview'){
        res.end(
            'This is the OVERVIEW page.'
        )
    }
    else if( pathName==='/product'){
        res.end('This is the PRODUCT page.')
    }
    else{
        res.writeHead(404, {
         'Content-type': 'text/html',
         'my-own-header': 'hello-shonna'
        });
        res.end('<h1>Page not found!</h1>');
    }
    
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('listening to requests on port 8000');
  
})

////////////////////////////////////////////////////////////////////////////////


