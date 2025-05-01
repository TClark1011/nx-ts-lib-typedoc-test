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

it("sorts an object array by a string property", () => {
	const gods = [
		{
			name: 'Ra',
			power: 100
		},
		{
			name: 'Zeus',
			power: 98
		},
		{
			name: 'Loki',
			power: 72
		},
		{
			name: 'Vishnu',
			power: 100
		}
	];

	const sorted = alphabetical(gods, (g) => g.name);
	expect(sorted).toEqual([
		{ name: 'Loki', power: 72 },
		{ name: 'Ra', power: 100 },
		{ name: 'Vishnu', power: 100 },
		{ name: 'Zeus', power: 98 }
	]);
})

it("does not mutate an object array", () => {
	const gods = [
		{
			name: 'Ra',
			power: 100
		},
		{
			name: 'Zeus',
			power: 98
		},
		{
			name: 'Loki',
			power: 72
		},
		{
			name: 'Vishnu',
			power: 100
		}
	];

	alphabetical(gods, (g) => g.name);

	expect(gods).toEqual([
		{ name: 'Ra', power: 100 },
		{ name: 'Zeus', power: 98 },
		{ name: 'Loki', power: 72 },
		{ name: 'Vishnu', power: 100 }
	]);
})

it("preserves a sorted object array", () => {
	const gods = [
		{
			name: 'Loki',
			power: 72
		},
		{
			name: 'Ra',
			power: 100
		},
		{
			name: 'Vishnu',
			power: 100
		},
		{
			name: 'Zeus',
			power: 98
		}
	];

	const sorted = alphabetical(gods, (g) => g.name);
	expect(sorted).toEqual([
		{ name: 'Loki', power: 72 },
		{ name: 'Ra', power: 100 },
		{ name: 'Vishnu', power: 100 },
		{ name: 'Zeus', power: 98 }
	]);
})