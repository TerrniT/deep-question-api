import { Elysia } from 'elysia'
import { QuestionService } from '../services/question.service'
import { DeepQuestionDatabase } from '../db'

const questionService = new QuestionService()

export const questionController = new Elysia()
  .decorate('db', new DeepQuestionDatabase())
  .get('/question', async ({ db }) => {
    const data = await questionService.getRandomQuestion(db)

    return `
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Deep Question Generator</title>
			</head>
			<style>
				body {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
				.container {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 100vh;
					background-color: black;
                                        text-align: center;
					color: white;
				}
				.reload {
					margin-top: 20px;
					padding: 10px 20px;
					background-color: white;
					color: black;
					text-decoration: none;
					border-radius: 5px;
					cursor: pointer;
					transition: 0.1,3s all ease-in-out;
				}
				.reload:hover {
					background-color: #171717;
					transition: 0.1,3s all ease-in-out;
					color: white;
				}
				.reload:active {
					transform: scale(0.98);
				}
				.title {
					font-size: 24px;
					font-weight: medium;
				}
			</style>
			<body>
				<div class="container">
					<span class="title">${data[0].title}</span>
					<a tabindex="1" class="reload" href="/question">New Question</a>
				</div>
			</body>
  		</html>
	`
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
