import { Elysia } from 'elysia'
import { QuestionService } from '../services/question.service'
import { DeepQuestionDatabase } from '../db'
import { returnQuestionHtml } from '../lib'

const questionService = new QuestionService()

export const questionController = new Elysia()
  .decorate('db', new DeepQuestionDatabase())
  .get('/question', async ({ db }) => {
    const data = await questionService.getRandomQuestion(db)

    return returnQuestionHtml(data[0].title as string)
  },
  {
    detail: {
      tags: [
        'App'
      ]
    }
  }
  )
  .get('/questions', ({ db }) => questionService.getQuestions(db), { detail: { tags: ['App'] } })
