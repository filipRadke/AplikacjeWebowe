const http = require('http')
const {readFile,writeFile,stat} = require('fs/promises')
const url = require('url')
const mime = require('mime-types')

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
      }, null, 10))
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
      }, null, 2))
      break;
    default:
      const filePath = "assets" + siteUrl.pathname
      try
      {
        await stat(filePath)
        const plik = await readFile(filePath)
        const contentType = mime.lookup(filePath)
        res.writeHead(200, {'Content-Type' : contentType})
        res.end(plik)
      }
      catch
      {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({
          status : "fileNotFound"
        }, null, 2))
        return
      }
      break
  }
})

server.listen(3000)
