import { alphabetical } from './index.js';

// #region example
const gods = [
	{
		name: 'Ra',
		power: 100,
	},
	{
		name: 'Zeus',
		power: 98,
	},
	{
		name: 'Loki',
		power: 72,
	},
	{
		name: 'Vishnu',
		power: 100,
	},
];

alphabetical(gods, (g) => g.name); // => [Loki, Ra, Vishnu, Zeus]

// #endregion example
