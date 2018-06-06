export class Card {
	id: number;
	title: string = '';
	states: String[] = ["undone", "doing", "cancelled", "done"];
	status: string = 'undone';

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
