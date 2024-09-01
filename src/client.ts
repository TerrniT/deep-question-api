import { createClient } from '@libsql/client'
import Logger from './logger'

const logger = new Logger()

if(!process.env.DB_URL || !process.env.DB_TOKEN) {
  logger.log('DB_URL and DB_TOKEN must be set')
}

export const databaseClient = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.DB_TOKEN
})

export type DatabaseClient = typeof databaseClient