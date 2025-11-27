import express from 'express'
const postRouter = express.Router()
import { prisma } from "../../lib/prisma"

postRouter.post('/create', async (req, res, next) => {
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
        next()
    }
    catch (error) {
        next(error)
    }
})

postRouter.get('/read', async (req, res, next) => {
    const { id } = req.body
    const singlePost = await prisma.post.findUnique({
        where: {
            id: id
        }
    })
    res.status(200).json(singlePost)
    next()
})

postRouter.get('/readAll', async (req, res, next) => {
    const allPosts = await prisma.post.findMany()
    res.status(200).json(allPosts)
    next()
})

postRouter.put('/update', async (req, res, next) => {
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
        next()
    }
    catch (error) {
        next(error)
    }
})

postRouter.delete('/delete', async (req, res, next) => {
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
        next()
    }
    catch (error) {
        next(error)
    }
})

export{postRouter}