
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
			<title>Deep Question Generator</title>
			<meta name="description" content="Deep Question Generator">

			<!-- Facebook Meta Tags -->
			<meta property="og:url" content="https://athletic-adventure-production.up.railway.app/question">
			<meta property="og:type" content="website">
			<meta property="og:title" content="Deep Question Generator">
			<meta property="og:description" content="Deep Question Generator">
			<meta property="og:image" content="https://athletic-adventure-production.up.railway.app/public/open-graph-1.png">

			<!-- Twitter Meta Tags -->
			<meta name="twitter:card" content="summary_large_image">
			<meta property="twitter:domain" content="athletic-adventure-production.up.railway.app">
			<meta property="twitter:url" content="https://athletic-adventure-production.up.railway.app/question">
			<meta name="twitter:title" content="Deep Question Generator">
			<meta name="twitter:description" content="Deep Question Generator">
			<meta name="twitter:image" content="https://athletic-adventure-production.up.railway.app/public/open-graph-1.png">

			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		
			<link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap" rel="stylesheet">

		</head>
		<style>
			body {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				font-family: "Inconsolata", monospace;
				font-optical-sizing: auto;
				font-weight: 400;
				font-style: normal;
				font-variation-settings:
					"wdth" 100;
			}
			.container {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 100vh;
				background-color: black;
				color: white;
				padding: 20px;
			}

			.button-bg {
				margin-top: 25px;
				padding: 10px 20px;
				text-decoration: none;
				border-radius: 5px;
				cursor: pointer;
				position: relative;
				color: black;

				background-image: none;
				background-color: #f4f4f4;
				transition: 0.3s all ease-in-out;
			}
			.button-bg:hover {
				background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
				background-size: cover;
				background-position: center;
				color: white;
				
				transition: 0.3s all ease-in-out;

			}
			.button-bg:active {
				transform: scale(0.98);
			}
			.button-text {
				width: 100%;
				font-weight: bold;
				text-transform: uppercase;
			}

			.title {
				font-size: 24px;
				text-align: center;
				font-family: "Inconsolata", monospace;
				font-optical-sizing: auto;
				font-weight: 500;
				font-style: normal;
				font-variation-settings:
					"wdth" 100;
			}
			.title-animation {
				animation: 2s title-animation ease-out;
			}
			@keyframes title-animation {
				0% {
					opacity: 0;
					transform: translateY(80%);
				}
				20% {
					opacity: 0;
				}
				50% {
					opacity: 1;
					transform: translateY(0%);
				}
				100% {
					opacity: 1;
					transform: translateY(0%);
				}
			}
		</style>
		<body>
			<div class="container">
				<span class="title title-animation">${questionTitle}</span>
				<a tabindex="1" class="button-bg" href="/question">
					<span class="button-text">New Question</span>
				</a>
			</div>
		</body>
	  </html>
`
}