import express from 'express'
const commentRouter = express.Router()
import { prisma } from "../../lib/prisma"

commentRouter.post('/create', async (req, res) => {
    const { content, postId } = req.body

    const newComment = await prisma.comment.create({
        data: {
            content: content,
            postId: postId,
        }
    })

    res.json(newComment)
})

commentRouter.get('/read', async (req, res) => {
    const { id } = req.body
    const singleComment = await prisma.comment.findUnique({
        where: {
            id: id
        }
    })
    res.json(singleComment)
})

commentRouter.get('/readAll', async (req, res) => {
    const allComments = await prisma.comment.findMany({})
    res.json(allComments)
})

commentRouter.put('/update', async (req, res) => {
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
    }
    catch(error) {
        return res.status(404).json({ error: error });
    }
})

commentRouter.delete('/delete', async (req, res) => {
    const { id } = req.body

    try
    {
        const deletedComment = await prisma.comment.delete({
            where: {
                id: id
            }
        })

        res.json(deletedComment)
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
})

export{commentRouter}