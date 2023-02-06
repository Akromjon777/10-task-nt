import { NextFunction, Request, Response } from 'express'
import { type } from 'os'
import { AppDataSource } from '../../config/config'
import { Jobs } from '../../entities/job.entities'
import { ErrorHandling } from '../../exceptions/error.handling'

const JOB_GET = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const job = await AppDataSource.getRepository(Jobs)
      .createQueryBuilder('jobs')
      .leftJoinAndSelect('jobs.employees', 'employees')
      .getMany()
      .catch((error) => next(new ErrorHandling(error.message, 400)))

    // const afd = await job

    // const job = await AppDataSource.getRepository(Jobs)
    // .find( {
    //     relations:{}
    // })
    // .catch(error => next(new ErrorHandling(error.message, 400)))

    res.status(200).json({
      data: job,
    })
  } catch (error) {
    console.log(error)
  }
}

const JOB_POST = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, salary } = req.body

    const job = await AppDataSource.getRepository(Jobs)
      .createQueryBuilder()
      .insert()
      .into(Jobs)
      .values({ title, salary })
      .returning([title, salary])
      .execute()
      .catch((error) => next(new ErrorHandling(error.message, 400)))

    res.status(200).json({
      data: job,
    })
  } catch (error) {
    console.log(error)
  }
}

export { JOB_GET, JOB_POST }
