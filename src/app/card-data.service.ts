import { Injectable, Output } from '@angular/core';
import { Card } from './card';
import { ErrorMessage } from './error-message';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

	lastId: number = 0;

	cards: Card[] = [];
	errMsg: ErrorMessage = new ErrorMessage('');
	okay: boolean = true;

  constructor() {
  }

  addCard(card: Card): CardDataService {
		if (!card.id) {
			card.id = ++this.lastId;
		}
		/*if (this.cards.length > 0) {
			console.log(this.cards);
			for (var i = 0; i < this.cards.length; i++) {
				console.log(card.title);
				console.log(this.cards[i].title);
				console.log(card.title === this.cards[i].title);
				console.log(i === this.cards.length - 1);
				if (card.title === this.cards[i].title) {
					this.cards.push({id: card.id, title: 'This card already exists! Please remove this card, and try again.', complete: false});
					break;
				} else if (i === this.cards.length - 1) {
					this.cards.push(card);
					break;
				}
			}
		} else {*/
			this.cards.push(card);
		//}			
		return this;
	}

	checkCard(card: Card, okay: boolean): CardDataService {
		//console.log("all cards from check:");
		//console.log(this.cards);
		if (card.title === "") {
			this.errMsg.msg = "Card could not be empty! Try input something."
			this.okay = false;
		} else if (this.cards.length > 0) {
			for (let i = 0; i < this.cards.length; i++) {
				//console.log("card.title");
				//console.log(card.title);
				//console.log("this.cards[i].title");
				//console.log(this.cards[i].title);
				//console.log("card.title === this.cards[i].title");
				//console.log(card.title === this.cards[i].title);
				//console.log("i === this.cards.length - 1");
				//console.log(i === this.cards.length - 1);
				if (card.title === this.cards[i].title) {
					this.errMsg.msg = "This card already exists! Try another title.";
					this.okay = false;
					//console.log(this.errMsg.msg);
					//console.log("after error:");
					//console.log(this.cards);
					break;
				} else if (i === this.cards.length - 1) {
					this.errMsg.msg = "";
					this.okay = true;
					//console.log(this.errMsg.msg);
					//console.log("no error:");
					//console.log(this.cards);
					break;
				}
			}
		} else {
			this.okay = true;
		}
		//console.log(this);
		return this;
	}

	deleteCardById(id: number): CardDataService {
		this.cards = this.cards.filter(card => card.id !== id);
		return this;
	}

	updateCardById(id: number, values: Object = {}): Card {
		let card = this.getCardById(id);
		if (!card) {
			return null;
		}
		Object.assign(card, values);
		return card;
	}

	getAllCards(): Card[] {
		return this.cards;
	}

	getCardById(id: number): Card {
		return this.cards.filter(card => card.id === id).pop();
	}

	/*toggleCardComplete(card: Card) {
		let updatedCard = this.updateCardById(card.id, {
			complete: !card.complete
		});
		return updatedCard;
	}*/
}
