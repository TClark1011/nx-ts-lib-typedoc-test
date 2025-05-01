import { it } from "vitest";
import { alphabetical } from "./index.js";

it("sorts a string array", () => {
	const arr = ["banana", "apple", "cherry"];
	const sorted = alphabetical(arr, (item) => item);

	expect(sorted).toEqual(["apple", "banana", "cherry"]);
})

it("does not mutate a string array", () => {
	const arr = ["banana", "apple", "cherry"];
	alphabetical(arr, (item) => item);

	expect(arr).toEqual(["banana", "apple", "cherry"]);
})

it("preserves a sorted string array", () => {
	const arr = ["apple", "banana", "cherry"];
	const sorted = alphabetical(arr, (item) => item);

	expect(sorted).toEqual(["apple", "banana", "cherry"]);
});