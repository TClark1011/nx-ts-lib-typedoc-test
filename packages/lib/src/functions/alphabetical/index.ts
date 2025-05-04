

export function alphabetical<T>(
	arr: T[],
	getKey: (item: T) => string,
): T[];
export function alphabetical<T>(
	arr: readonly T[],
	getKey: (item: T) => string,
): readonly T[];
/**
 * Sorts an array of items alphabetically with string keys extracted
 * from each item by a callback function.
 * {@includeCode example.ts#example}
 * @param arr - The array to sort
 * @param getKey - A function that extracts a string from each item
 * that is used for sorting
 * @returns A new array sorted alphabetically by the keys
 */
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
