import express from 'express'
const postRouter = express.Router()
import { prisma } from "../../lib/prisma"

postRouter.post('/create', async (req, res) => {
    const { categoryId, content, title } = req.body

    try
    {
        const categoryExists = await prisma.category.findUnique({
            where: {
                id: categoryId
            }
        })

        if(!categoryExists) {
            throw new Error("Category does not exist")
        }

        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                categoryId
            }
        })

        res.status(200).json(newPost)
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
})

postRouter.get('/read', async (req, res) => {
    const { id } = req.body
    const singlePost = await prisma.post.findUnique({
        where: {
            id: id
        }
    })
    res.status(200).json(singlePost);
})

postRouter.get('/readAll', async (req, res) => {
    const allPosts = await prisma.post.findMany()
    res.status(200).json(allPosts)
})

postRouter.put('/update', async (req, res) => {
    const { id, title, content, categoryId } = req.body

    try
    {
        const postExists = await prisma.post.findUnique({
            where: {
                id: id
            }
        })

        if(!postExists) {
            throw new Error("Post does not exist")
        }

        const updatedPost = await prisma.post.update({
            where: {
                id: id
            },
            data: {
                title,
                content,
                categoryId
            }
        })

        res.status(200).json(updatedPost)
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
})

postRouter.delete('/delete', async (req, res) => {
    const { id } = req.body

    try
    {
        const postExists = await prisma.post.findUnique({
            where: {
                id: id
            }
        })

        if(!postExists) {
            throw new Error("Post does not exist")
        }

        const deletedPost = await prisma.post.delete({
            where: {
                id: id
            }
        })
        res.status(200).json(deletedPost)
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
})

await prisma.$disconnect()

export{postRouter}