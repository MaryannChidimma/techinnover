import express from "express";
import reminderController from "../controllers/reminderController";
import {Validator} from "../validators"
import { ReminderSearchSchema, ReminderSchema} from "../validators/reminder"

const router = express.Router();


function reminderRouter() {
 router.post(
    "/",
    Validator(ReminderSchema, 'body'),
    reminderController.create
 )
 router.get(
    "/",
    Validator(ReminderSearchSchema, 'query'),
    reminderController.getAllReminder
 )
 router.get(
    "/:id",
    reminderController.getReminderById
 )
 router.use('/:id', reminderController.handleOthers)

  return router;
}

export default reminderRouter;