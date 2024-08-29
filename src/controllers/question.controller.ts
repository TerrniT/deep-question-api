import Elysia from 'elysia'
import { QuestionService } from '../services/question.service'
import { DeepQuestionDatabase } from '../db'

const questionService = new QuestionService()

export const questionController = new Elysia()
  .decorate('db', new DeepQuestionDatabase())
  .get('/question', ({ db }) => questionService.getRandomQuestion(db), {
    detail: {
      tags: [
        'App'
      ]
    }
  })
  .get('/questions', ({ db }) => questionService.getQuestions(db), { detail: { tags: ['App'] } })