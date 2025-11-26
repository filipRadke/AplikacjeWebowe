import type { Request, Response, NextFunction } from "express";
import 'dotenv/config'
import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_URL || "");
await client.connect();
const db = client.db(process.env.MONGO_DB_NAME || "");
const logsCollection = db.collection(process.env.MONGO_ERROR_NAME || "");

export async function errorMiddleware(err: unknown ,req: Request, res: Response, next: NextFunction) {
    const insertErrorLog = {
        timestamp: new Date(),
        error: err,
        method: req.method,
        url: req.originalUrl,
        data: req.body,
    }
    const insertResult = await logsCollection.insertOne(insertErrorLog)
    console.log("Inserted error: ", insertResult);
    next();
}