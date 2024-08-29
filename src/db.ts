import Logger from './logger'
import { createClient } from '@libsql/client'

const logger = new Logger()

if(!process.env.DB_URL || !process.env.DB_TOKEN) {
  logger.log('DB_URL and DB_TOKEN must be set')
}

export interface DeepQuestion {
    id?: number;
    body: string;
}

export const db = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.DB_TOKEN
})

export type Database = typeof db
export class DeepQuestionDatabase {
  private db: Database

  constructor() {
    this.db = db
    logger.log('Connecting to database')
    // Initialize the database
    this.init()
      .then(() => logger.log('Database initialized'))
      .catch(console.error)
  }

  // Get all questions
  async getQuestions() {
    const results = await this.db.execute('SELECT * FROM questions')
    return results.rows
  }

  async getRandomQuestion() {
    const results = await this.db.execute('SELECT * FROM questions ORDER BY RANDOM() LIMIT 1')
    return results.rows
  }

  // Initialize the database
  protected async init() {
    return await this.db.execute('CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)')
  }
}