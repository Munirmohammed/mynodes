const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Hpme Page")
    }
    if (req.url === "/about") {
        res.end("About Page")
    }
    res.end("Error Page")
})

server.listen(5000, () => {
    console.log("Server Listening on port 5000....");
})