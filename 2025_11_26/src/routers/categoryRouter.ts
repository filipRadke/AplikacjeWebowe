import express from 'express'
const categoryRouter = express.Router()
import { prisma } from "../../lib/prisma"

categoryRouter.post('/create', async (req, res,next) => {
    const { name } = req.body
    try
    {
        const newCategory = await prisma.category.create({
            data: {
                name: name,
            }
        })

        res.status(200).json(newCategory)
        next()
    }
    catch (error) {
        next(error);
    }
})

categoryRouter.get('/read', async (req, res,next) => {
    const { id } = req.body

    const category = await prisma.category.findUnique({
        where: {
            id: id
        }
    })

    res.status(200).json(category)
    next()
})

categoryRouter.get('/readAll', async (req, res,next) => {
    const allCategories = await prisma.category.findMany({})
    res.status(200).json(allCategories)
    next()
})

categoryRouter.put('/update', async (req, res,next) => {
    const { id, name } = req.body
    try
    {
        const commentExists = await prisma.category.findUnique({
            where: {
                id: id
            }
        })

        if(!commentExists) {
            throw new Error("Category does not exist")
        }

        const updatedCategory = await prisma.category.update({
            where: {
                id: id
            },
            data: {
                name: name
            }
        })

        res.status(200).json(updatedCategory)
        next()
    }
    catch (error) {
        next(error)
    }

})

categoryRouter.delete('/delete', async (req, res,next) => {
    const { id } = req.body
    try
    {
        const commentExists = await prisma.category.findUnique({
            where: {
                id: id
            }
        })

        if(!commentExists) {
            throw new Error("Category does not exist")
        }

        const deletedCategory = await prisma.category.delete({
            where: {
                id: id
            }
        })

        res.status(200).json(deletedCategory)
        next()
    }
    catch (error) {
        next(error)
    }
})

export{categoryRouter}