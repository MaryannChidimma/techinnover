import {NextFunction, Request, Response} from 'express'
import reminderService from "../services/reminderService"
import appResponse from "../../lib/appResponse"
import constants from "../config/constants"
import { ForbiddenError, NotFoundError } from '../../lib/appError'
const {REMINDER_CREATED, FETCH_REMINDER, REMINDER_NOT_FOUND, INVALID_REMINDER_ROUTE } = constants.MESSAGES

class ReminderConteroller {

  async create (req: Request, res: Response){
      const result = await reminderService.create(req.body)
      res.status(201).send(appResponse(REMINDER_CREATED, result))
  }
  async getAllReminder (req: Request, res: Response){
     const result = await reminderService.findAll(req.query)
     res.status(200).send(appResponse(FETCH_REMINDER, result))
  }
  async getReminderById(req: Request, res: Response){
     const result = await reminderService.findById(Number(req.params.id))
      if(!result)throw new NotFoundError(REMINDER_NOT_FOUND)
      res.status(200).send(appResponse(FETCH_REMINDER, result))
  }

  async handleOthers (req: Request, res: Response, next: NextFunction) {
     if(req.method === "PUT" || req.method === "DELETE" || req.method === "PATCH" ){
      throw new ForbiddenError(INVALID_REMINDER_ROUTE)
     }
    next()
  }
}
export default new ReminderConteroller()