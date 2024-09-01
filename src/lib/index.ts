
export function returnQuestionHtml(questionTitle: string) {
  return `
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="X-UA-Compatible" content="ie=edge" />
			<meta name="description" content="Deep Question Generator" />
			<meta name="theme-color" content="#171717" />
			<link rel='shortcut icon' type='image/x-icon' href='/public/favicon.ico' />
			<link rel="icon" type="image/png" href="/public/favicon.png" />
			<meta name="author" content="Gleb Kotovsky">

			<meta property="og:type" content="website">
			<meta property="og:title" content="Deep Question Generator">
			<meta property="og:image" content="/public/open-graph.png">
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
				<span class="title">${questionTitle}</span>
				<a tabindex="1" class="reload" href="/question">New Question</a>
			</div>
		</body>
	  </html>
`
}