import express from 'express'
import type {Express,Request,Response,NextFunction} from 'express';
import { postRouter } from './routers/postRouter'
import { commentRouter } from "./routers/commentRouter";
import { categoryRouter } from "./routers/categoryRouter";
import { logsMiddleware } from "./Middleware/logsMiddleware"
import { errorMiddleware } from "./Middleware/errorMiddleware"
import { prisma } from "../lib/prisma"
import 'dotenv/config'
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

async function main() {
    app.use("/post", postRouter)
    app.use("/comment", commentRouter)
    app.use("/category", categoryRouter)

    app.use(logsMiddleware)

    app.use(errorMiddleware)

    app.listen(3000, () => {
        console.log('App is running on http://localhost:3000')
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
