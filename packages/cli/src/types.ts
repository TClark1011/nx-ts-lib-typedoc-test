import { z } from "zod";

const zBufferEncoding = z.enum(["utf8", "base64", "hex", "latin1", "binary", "ascii"]);

export const githubContentResponseSchema = z.object({
	code: z.literal('404'),
}).or(z.object({
	content: z.string(),
	encoding: zBufferEncoding,
}))

export const configSchema = z.object({
	folder: z.string(), // where the functions will be stored
	rootImportAlias: z.string(), // the root import alias
	utilImportAlias: z.string(),
});

export type Config = z.infer<typeof configSchema>;