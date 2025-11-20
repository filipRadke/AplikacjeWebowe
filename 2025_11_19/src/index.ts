import express, { Express } from 'express'
import { PrismaClient } from '../generated/prisma/client'
import { postRouter } from './routers/postRouter'
import { commentRouter } from "./routers/commentRouter";
import { categoryRouter } from "./routers/categoryRouter";

const prisma = new PrismaClient()
const app: Express = express()

async function main() {
    app.use("/post", postRouter)
    app.use("/comment", commentRouter)
    app.use("/category", categoryRouter)

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
