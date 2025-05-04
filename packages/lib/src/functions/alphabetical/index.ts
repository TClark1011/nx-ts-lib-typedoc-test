

export function alphabetical<T>(
	arr: T[],
	getKey: (item: T) => string,
): T[];
export function alphabetical<T>(
	arr: readonly T[],
	getKey: (item: T) => string,
): readonly T[];


/**
 * Fetches a string key from an array item
 * @callback getKeyCallback
 * @template T the type of the items in the array
 * @param {T} item - The item to extract the key from
 * @returns {string} The key to use for sorting
 */

/**
 * Sorts an array of items alphabetically with string keys extracted
 * from each item by a callback function.
 * @template T the type of the items in the array
 * @param {T[]} arr - The array to sort
 * @param {getKeyCallback} getKey - A function that extracts a string from each item
 * that is used for sorting
 * @returns {T[]} A new array sorted alphabetically by the keys
 * {@includeCode example.ts#example}
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
