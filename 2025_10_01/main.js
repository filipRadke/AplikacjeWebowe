const http = require('http');
const {readFile,writeFile} = require('fs/promises');
const url = require('url');

const server = http.createServer(async (req, res) => {
    siteUrl = url.parse(req.url,true)
    switch (siteUrl.pathname) {
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
        case "/getParams":
          let queries = url.parse(siteUrl).query
          var newDate = Date.now();
          console.log(newDate)
          
          let fileName = "params_" + newDate + ".json";
          await writeFile(fileName,JSON.stringify(queries,null,2),'utf8')

          res.end(JSON.stringify({
            ok : "ok"
          }, null, 2)
          )
          break;
        default:
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end("Podaj url:\n /main, /json, /html, /download, /getParams")
            break
    }
})

server.listen(3000)
