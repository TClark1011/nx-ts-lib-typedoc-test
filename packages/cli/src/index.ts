
const decodeBase64 = (base64: string): string => {
	const decoded = Buffer.from(base64, 'base64').toString('utf-8');
	return decoded;
}
const getFunctionCode = async (functionName: string): Promise<string> => {
	const requestResult = await fetch(`https://api.github.com/repos/TClark1011/nx-ts-lib-typedoc-test/contents/packages/lib/src/functions/${functionName}/index.ts`);

	const body = await requestResult.json();

	return decodeBase64(body.content);
}

getFunctionCode('alphabetical').then(console.log);