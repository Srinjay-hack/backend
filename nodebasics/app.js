const http = require("http");
const hostname="127.0.0.1";
const port=3000;
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
      res.end("Hello World");
   }
   else if(req.url === '/api'){
      res.end("Hello API");
   }
   else{
      res.end("Nothimg to show");
   }
});

server.listen(port,hostname,()=>{
   console.log(`Server running at http://${hostname}:${port}/`);
});