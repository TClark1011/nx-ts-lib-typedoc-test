/**
 * Sorts an array of items alphabetically with string keys extracted
 * from each item by a callback function.
 * @template T the type of the items in the array
 * @param arr - The array to sort
 * @param getKey - A function that extracts a string from each item
 * that is used for sorting
 * @returns A new array sorted alphabetically by the keys
 * {@includeCode example.ts#example}
 */
export function alphabetical(arr, getKey) {
    return [...arr].sort((a, b) => {
        const keyA = getKey(a).toLowerCase();
        const keyB = getKey(b).toLowerCase();
        if (keyA < keyB) {
            return -1;
        }
        if (keyA > keyB) {
            return 1;
        }
        return 0;
    });
}
