import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.css'],
  host: {'class': 'col-6'}
})
export class NewCardInputComponent implements OnInit {

  @Output()
  newCard: Card = new Card();

	@Output()
  add: EventEmitter<Card> = new EventEmitter();

  @Output()
  check: EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addCard() {
    this.check.emit(this.newCard);
    this.add.emit(this.newCard);
  	this.newCard = new Card();
  }

}
