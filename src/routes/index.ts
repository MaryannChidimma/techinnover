import express, {Request, Response }from "express";
import reminderRoute from './reminderRoute'
const router = express.Router();


function rootRouter() {
  router.use("/reminder", reminderRoute());
  return router;
}

export default rootRouter;
