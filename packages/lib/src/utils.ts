
export function isPlainObject(obj: unknown): obj is Record<string, unknown> {
	if (typeof obj !== 'object' || obj === null) {
		return false
	}

	const proto = Object.getPrototypeOf(obj)
	return proto === Object.prototype || proto === null
}