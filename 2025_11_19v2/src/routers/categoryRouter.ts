import express from 'express'
const categoryRouter = express.Router()
import { prisma } from "../../lib/prisma"

categoryRouter.post('/create', async (req, res) => {
    const { name } = req.body
    const newCategory = await prisma.category.create({
        data: {
            name: name,
        }
    })
    res.status(200).json(newCategory)
})

categoryRouter.get('/read', async (req, res) => {
    const { id } = req.body

    const category = await prisma.category.findUnique({
        where: {
            id: id
        }
    })

    res.status(200).json(category)
})

categoryRouter.get('/readAll', async (req, res) => {
    const allCategories = await prisma.category.findMany({})
    res.status(200).json(allCategories)
})

categoryRouter.put('/update', async (req, res) => {
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
    }
    catch (error) {
        res.status(404).json({ error: error });
    }

})

categoryRouter.delete('/delete', async (req, res) => {
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
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
})

export{categoryRouter}