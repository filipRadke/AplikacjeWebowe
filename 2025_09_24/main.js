const http = require('http');
const {readFile} = require('fs/promises');

const server = http.createServer(async (req, res) => {
    switch (req.url) {
        case "/main" :
            res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
            res.end("Strona główna")
            break
        case "/json" :
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({
                url: req.url
            }, null, 10)
            )
            break
        case "/html" :
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end("<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Title</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <h1>Document created in js</h1>\n" +
                "</body>\n" +
                "</html>")
            break
        case "/download" :
            res.writeHead(200, {'Content-Type': 'text/html'})
            const file = await readFile("download.html","utf-8");
            res.end(file)
            break
        default:
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end("Podaj url:\n /main, /json, /html, /download")
            break
    }
})

server.listen(3000)