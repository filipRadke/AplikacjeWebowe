import express from 'express'
const commentRouter = express.Router()
import { prisma } from "../../lib/prisma"

commentRouter.post('/create', async (req, res, next) => {
    const { content, postId } = req.body

    const newComment = await prisma.comment.create({
        data: {
            content: content,
            postId: postId,
        }
    })

    res.json(newComment)
    next()
})

commentRouter.get('/read', async (req, res, next) => {
    const { id } = req.body
    const singleComment = await prisma.comment.findUnique({
        where: {
            id: id
        }
    })
    res.json(singleComment)
    next()
})

commentRouter.get('/readAll', async (req, res, next) => {
    const allComments = await prisma.comment.findMany({})
    res.json(allComments)
    next()
})

commentRouter.put('/update', async (req, res, next) => {
    const { id, content } = req.body

    try
    {
        const commentExists = await prisma.comment.findUnique({
            where: {
                id: id
            }
        })

        if(!commentExists) {
            throw new Error("Post does not exist")
        }

        const updatedComment = await prisma.comment.update({
            where: {
                id: id
            },
            data: {
                content: content
            }
        })

        res.status(200).json(updatedComment)
        next()
    }
    catch(error) {
        return res.status(404).json({ error: error });
    }
})

commentRouter.delete('/delete', async (req, res, next) => {
    const { id } = req.body

    try
    {
        const deletedComment = await prisma.comment.delete({
            where: {
                id: id
            }
        })

        res.json(deletedComment)
        next()
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
})

export{commentRouter}