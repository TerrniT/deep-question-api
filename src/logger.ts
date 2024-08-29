import pino from "pino";

import pretty from "pino-pretty";

export default class Logger {
	log(event: unknown) {
		pino(pretty()).info(event);
	}
}