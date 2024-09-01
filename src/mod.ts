import { Elysia, redirect } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { swagger } from '@elysiajs/swagger'

import { questionController } from './controllers/question.controller'

import Logger from './logger'

const port = process.env.PORT ?? 3000
const logger = new Logger()

logger.log('Checking health...')

const app = new Elysia()
  .decorate('logger', logger)
  .use(html())
  .use(staticPlugin())
  .use(
    swagger({
      documentation: {
        tags: [
          { name: 'App', description: 'General endpoints' }
        ]
      }
    })
  )
  .get('/', () => redirect('/question'))
  .use(questionController)
  .listen(port)

logger.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app
