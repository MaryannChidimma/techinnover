import { Reminder, SearchReminder } from "../interface/reminderInterface"
import * as fs from 'fs';
import util from "util"
import { resolve } from 'path';

const readFile = util.promisify(fs.readFile);
const absolutePath = resolve('./src/database/reminder.json');


class ReminderService {

  async create(data: Reminder) {

    const date = new Date()
    let reminders = await readFile(absolutePath, 'utf8')
    if (!reminders) {
      await this.writeTofile([{ ...data, id: 1, date }])
      return { id: 1, date, ...data }
    }

    reminders = JSON.parse(reminders)
    const id = reminders.length + 1

    await this.writeTofile([...reminders, { id, date, ...data }])
    return { id, date, ...data }
  }

  async findAll(query: SearchReminder) {
    const queryItems: SearchReminder = {}

    if (query.id) {
      queryItems.id = Number(query.id)
    }
    if (query.user) {
      queryItems.user = Number(query.user)
    }
    if (query.description) {
      queryItems.description = (query.description)
    }
    if (query.date) {
      queryItems.date = query.date
    }
    if (query.after) {
      queryItems.after = new Date(Number(query.after))
    }

    return this.quickSearch(queryItems)
  }

  async findReminderById(id: number) {
    return await this.findById(id)
  }

  async writeTofile(data: object) {
    fs.writeFile(absolutePath, JSON.stringify(data), function (err) {
      if (err) throw err;
    });
  }

  async quickSearch(query: SearchReminder) {

    let file = await readFile(absolutePath, 'utf8');
    let data: Reminder[] = JSON.parse(file)

    if (query === null) return data
    if ("id" in query) data = data.filter(item => query.id === item.id)
    if ("user" in query) data = data.filter(item => query.user === item.user)
    if ("description" in query) data = data.filter(item => query.description === item.id)
    if ("date" in query) data = data.filter(item => query.date === item.date)
    if ("after" in query) data = data.filter(item => new Date(item.date!) > (query.after!))

    return data
  }
  async findById(id: number) {
    let file = await readFile(absolutePath, 'utf8');
    let data: Reminder[] = JSON.parse(file)
    const getOne = data.find(element => element.id === id)
    return getOne
  }
}

export default new ReminderService()