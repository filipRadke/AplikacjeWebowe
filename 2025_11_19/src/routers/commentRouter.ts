import express from 'express'
import { PrismaClient } from '../../generated/prisma/client'
const commentRouter = express.Router()

commentRouter.post('/create', async (req, res) => {
    res.json({ok: "ok"})
})

commentRouter.get('/read', async (req, res) => {
    res.json({ok: "ok"})

})

commentRouter.get('/readAll', async (req, res) => {
    res.json({ok: "ok"})

})

commentRouter.put('/update', async (req, res) => {
    res.json({ok: "ok"})

})

commentRouter.delete('/delete', async (req, res) => {
    res.json({ok: "ok"})

})

export{commentRouter}