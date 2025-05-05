import { Client } from "./client.js";

const client = new Client({
	utilImportAlias: "$",
	folder: 'src/lib/utils',
	rootImportAlias: "$",
});

client.getFunctionCode('alphabetical').then(console.log);