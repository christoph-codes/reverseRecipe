import { Recipe } from "../graphql/generated/generated-types";

export const testRecipes: Recipe[] = [
    {
		category: 'Test',
		cookTime: 100,
		created: '',
		id: 'testa',
		imgSrc: '/star_hover.svg',
		ingredients: ['pickle', 'salt', 'vinegar'],
		instructions: '[\'add pickle\', \'add salt\', \'add vinegar\']',
		measurements: [ '1', '1', '1'],
		name: 'Test A',
		updated: '',
	},
    {
		category: 'Test',
		cookTime: 80,
		created: '',
		id: 'testb',
		imgSrc: '/star_default.svg',
		ingredients: ['potato', 'french frie', 'potato chips'],
		instructions: '[\'add potato\', \'add french frie\', \'add chips\']',
		measurements: [ '1', '1', '1'],
		name: 'Test B',
		updated: '',
	},
    {
		category: 'Test',
		cookTime: 15,
		created: '',
		id: 'testc',
		imgSrc: '/star_active.svg',
		ingredients: ['fish', 'cooked fish', 'uncooked fish'],
		instructions: '[\'add fish\', \'eat fish\', \'cook fish\']',
		measurements: [ '1', '1', '1'],
		name: 'Test C',
		updated: '',
	}
];