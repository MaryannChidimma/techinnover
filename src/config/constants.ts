import dotenv from 'dotenv';
dotenv.config();

const constants = {
  APP_NAME: "techinnover",
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT, 

  MESSAGES: {
    REMINDER_CREATED: "Reminder is successfully created",
    FETCH_REMINDER: "Reminder is successfully fetched",
    REMINDER_NOT_FOUND: "ID not found",
    INVALID_REMINDER_ROUTE: "Invalid Route",
  },
}

export default constants;
