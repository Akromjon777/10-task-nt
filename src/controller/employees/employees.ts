import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../../config/config"
import { Employess } from "../../entities/employees.entities"
import { ErrorHandling } from "../../exceptions/error.handling"

const EMPLOYEES_GET = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const employees = await AppDataSource.getRepository(Employess).find()
        .catch(error => next(new ErrorHandling(error.message, 400)))

        res.status(200).json({
            data:employees
        }) 
    } catch (error) {
        console.log(error);
        
    }
}

const EMPLOYEES_POST  = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { name } = req.body
        
        const employees = await AppDataSource.getRepository(Employess)
        .createQueryBuilder()
        .insert()
        .into(Employess)
        .values({name })
        .returning([name])
        .execute()
        .catch(error => next(new ErrorHandling(error.message, 400)))
        console.log(employees);
        
        res.status(200).json({
            data: employees
        })
    } catch (error) {
        console.log(error);
        
    }
}

const MIGRATIONS_POST  = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {  employeesId, jobID  } = req.body
        console.log(jobID);
        console.log(employeesId);
        
        
        const employees = await AppDataSource
        .createQueryBuilder()
        .insert()
        .into('employess_jobs_jobs')
        .values({employessId: employeesId,jobsId: jobID })
        .returning([jobID, employeesId])
        .execute()
        .catch(error => next(new ErrorHandling(error.message, 400)))
        console.log(employees);
        
        res.status(200).json({
            data: employees
        })
    } catch (error) {
        console.log(error);
        
    }
}



export {EMPLOYEES_GET, EMPLOYEES_POST, MIGRATIONS_POST}