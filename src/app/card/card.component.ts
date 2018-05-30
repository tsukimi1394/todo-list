import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input() card: Card;

	@Output()
	remove: EventEmitter<Card> = new EventEmitter();

	@Output()
	toggleComplete: EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleCardComplete(card: Card) {
  	this.toggleComplete.emit(card);
  }

  removeCard(card: Card) {
  	this.remove.emit(card);
  }

}
