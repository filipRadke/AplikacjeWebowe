const express = require('express')
const url = require('url')
const {readFile} = require('fs/promises')

const app = express()
const port = 3000
app.use(express.static('static'))
app.use(express.urlencoded({extended: true}))

const header = readFile("./static/header.html", "utf8")
const footer = readFile("./static/footer.html", "utf8")

async function generateHtml(path){
    let h = await header
    let f = await footer
    let body = await readFile("./static/" + path, "utf-8")
    return h + body + f
}

app.get('/', async (req, res) => {
    let html = await generateHtml("main.html")
    res.send(html)
})

app.get('/o-nas', async (req, res) => {
    let html = await generateHtml("about.html")
    res.send(html)
})

app.get('/oferta', async (req, res) => {
    let html = await generateHtml("ofert.html")
    res.send(html)
})

app.get('/kontakt', async (req, res) => {
    let html = await generateHtml("contact.html")
    res.send(html)
})

app.post('/kontakt', async (req, res) => {
    console.log(req.body)
    res.redirect(`/`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
