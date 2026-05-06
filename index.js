const http = require("http");
const  server = http.createServer((req,res)=>{

    if(req.url==="/"){
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.end("<h1>Welcome to the Home Page</h1>")
    }
});

server.listen(5000,()=>{
    console.log("Server is running on port 5000");
})