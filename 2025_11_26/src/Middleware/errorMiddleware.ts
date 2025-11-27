import type { Request, Response, NextFunction } from "express";
import 'dotenv/config'
import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_URL || "");
await client.connect();
const db = client.db(process.env.MONGO_DB_NAME || "");
const logsCollection = db.collection(process.env.MONGO_ERROR_NAME || "");

export async function errorMiddleware(err:any,req: Request, res: Response, next: NextFunction) {
    const insertErrorLog = {
        timestamp: new Date(),
        error: err,
        statusCode: res.statusCode || 500,
        method: req.method,
        url: req.originalUrl,
        data: req.body,
    }
    const insertResult = await logsCollection.insertOne(insertErrorLog)

    res.status(res.statusCode || 500).json({ error: 'An error occurred', details: err.message || err });

    next();
}