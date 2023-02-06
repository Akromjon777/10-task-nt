import { NextFunction, Request, Response } from "express";
import { ErrorHandling } from "../exceptions/error.handling";
const ErrorMiddleware = (error:ErrorHandling, req:Request,res:Response,next:NextFunction) => {
    res.status(error.status).json({
        message: error.message,
        status: error.status
    })

}
export {ErrorMiddleware}