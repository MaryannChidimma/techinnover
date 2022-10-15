
interface Reminder {
    id?: number;
    user : number;
    description: string;
    date?: Date
}

interface GetReminder {
    id: number;
    user : number;
    description: string;
    date: string 
}

interface SearchReminder {
    id?: number;
    user?: number;
    description?: string;
    date?: Date;
    after?:Date
}

export {
Reminder,
GetReminder,
SearchReminder
}