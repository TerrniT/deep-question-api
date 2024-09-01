import { type DatabaseClient, databaseClient } from './client'
import Logger from './logger'

const logger = new Logger()

export interface DeepQuestion {
    id?: number;
    body: string;
}

export class DeepQuestionDatabase {
  private db: DatabaseClient

  constructor() {
    this.db = databaseClient

    logger.log('Connecting to database')
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