const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, {
            "content-type": "text/html"
        });
        res.end("<h1>Welcome to the Home Page</h1>");
    }

    else if (req.url === "/about") {
        res.writeHead(200, {
            "content-type": "text/plain"
        });
        res.end("This is the about page");
    }

   
    else if (req.url === "/contact") {
        res.writeHead(200, {
            "content-type": "text/plain"
        });
        res.end("This is the contact page");
    }
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});