import express from 'express'
import { PrismaClient } from '../../generated/prisma/client'
const categoryRouter = express.Router()

categoryRouter.post('/create', (req, res) => {
    res.json({ok: "ok"})

})

categoryRouter.get('/read', (req, res) => {
    res.json({ok: "ok"})

})

categoryRouter.get('/readAll', (req, res) => {
    res.json({ok: "ok"})

})

categoryRouter.put('/update', (req, res) => {
    res.json({ok: "ok"})

})

categoryRouter.delete('/delete', (req, res) => {
    res.json({ok: "ok"})

})

export{categoryRouter}