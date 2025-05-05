import { Config, githubContentResponseSchema } from "./types.js";

const replaceAll = (str: string, searchValue: string, replaceValue: string): string => {
	const regex = new RegExp(searchValue, 'g');
	return str.replace(regex, replaceValue);
}

export class Client {

	constructor(private readonly config: Config) {
	}

	async getFunctionCode(functionName: string): Promise<string> {
		const requestResult = await fetch(`https://api.github.com/repos/TClark1011/nx-ts-lib-typedoc-test/contents/packages/lib/src/functions/${functionName}/index.ts`);

		const body = githubContentResponseSchema.parse(await requestResult.json());

		if (!('content' in body)) {
			throw new Error(`Function "${functionName}" not found`);
		}

		const code = Buffer.from(body.content, body.encoding).toString('utf-8')

		return replaceAll(code, '$utils', this.config.utilImportAlias);
	}
}	