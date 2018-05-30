import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

	@Input() 
	cards: Card[];

	@Output()
	remove: EventEmitter<Card> = new EventEmitter();

	@Output()
	toggleComplete: EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleCardComplete(card: Card) {
  	this.toggleComplete.emit(card);
  }

  onRemoveCard(card: Card) {
  	this.remove.emit(card);
  }

}
