const http = require("http");

const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
    res.writeHead(200);
    if (req.url === "/") {
        res.end("Hello, world!");
    }
    else if (req.url === "/about") {
        res.end("About Page");
    } 
    else if (req.url === "/contact") {
        res.end("Contact Page");
    }
    else {
        res.writeHead(404);
        res.end("404 Not Found");
        }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});