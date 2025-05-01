

export function alphabetical<T>(
	arr: T[],
	getKey: (item: T) => string,
): T[];
export function alphabetical<T>(
	arr: readonly T[],
	getKey: (item: T) => string,
): readonly T[];
export function alphabetical<T>(
	arr: T[] | readonly T[],
	getKey: (item: T) => string,
): T[] {
	return [...arr].sort((a, b) => {
		const keyA = getKey(a).toLowerCase()
		const keyB = getKey(b).toLowerCase()

		if (keyA < keyB) {
			return -1
		}
		if (keyA > keyB) {
			return 1
		}
		return 0
	})
}