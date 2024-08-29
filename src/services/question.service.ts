import type { DeepQuestionDatabase } from '../db'

export class QuestionService {
  getRandomQuestion = (db: DeepQuestionDatabase) => {
    return db.getRandomQuestion()
  }

  getQuestions = (db: DeepQuestionDatabase) => {
 		return db.getQuestions()
  }
}