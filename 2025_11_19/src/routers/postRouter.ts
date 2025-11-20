import express from 'express'
import { PrismaClient } from '../../generated/prisma/client'
const postRouter = express.Router()
const prisma = new PrismaClient()

postRouter.post('/create', async (req, res) => {
    res.json({ok: "ok"})
})

postRouter.get('/read', async (req, res) => {
    res.json({ok: "ok"})
})

postRouter.get('/readAll', async (req, res) => {
    res.json({ok: "ok"})
})

postRouter.put('/update', async (req, res) => {
    res.json({ok: "ok"})
})

postRouter.delete('/delete', async (req, res) => {
    res.json({ok: "ok"})
})

export{postRouter}