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

  constructor() { }

  ngOnInit() {
    /*this.cards = [
      {id: 1, title: "undone", status: "undone"},
      {id: 2, title: "done", status: "done"},
      {id: 3, title: "doing", status: "doing"},
      {id: 4, title: "cancelled", status: "cancelled"}
    ]*/
  }

  onRemoveCard(card: Card) {
  	this.remove.emit(card);
  }

}
