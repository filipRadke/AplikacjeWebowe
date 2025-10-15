const express = require('express')
const url = require('url')
const {readFile,writeFile,stat} = require('fs/promises')

const app = express()
const port = 3000

app.get('/main', (req, res) => {
  res.send('Strona główna')
})

app.get('/json', (req, res) => {
  res.json({
    url : req.url
  })
})

app.get('/html', (req, res) => {
  res.send("<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title>Title</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "    <h1>Document created in js</h1>\n" +
    "</body>\n" +
    "</html>")
})

app.get('/download', (req, res) => {
  res.sendFile(__dirname + "/download.html")
})

app.get('/getParams', async (req, res) => {
  siteUrl = url.parse(req.url,true)

  let queries = url.parse(siteUrl).query
  
  let fileName = "params_" + Date.now() + ".json";
  await writeFile(fileName,JSON.stringify(queries,null,2),'utf8')

  res.json({
    ok : "ok"
  })
})

app.use(express.static(__dirname + "/assets"), (req, res) =>{
  res.status(404)
  res.json({
    status: "fileNotFound"
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
