import Joi from 'joi'

const ReminderSearchSchema = Joi.object({
  id: Joi.number(),
  user: Joi.number(),
  after: Joi.string(),
  date: Joi.date(),
  description: Joi.string()
});

const ReminderSchema = Joi.object({
  user: Joi.number().required(),
  description: Joi.string().required(),
  date: Joi.date()
})


export {
  ReminderSearchSchema,
  ReminderSchema
}