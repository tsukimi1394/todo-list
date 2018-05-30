import { Component } from '@angular/core';
import { Card } from './card';
import { CardDataService } from './card-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardDataService]
})
export class AppComponent {

  constructor(private cardDataService: CardDataService) {
  }

  onAddCard(card: Card) {
    this.cardDataService.addCard(card);
  }

  onToggleCardComplete(card: Card) {
    this.cardDataService.toggleCardComplete(card);
  }

  onRemoveCard(card: Card) {
    this.cardDataService.deleteCardById(card.id);
  }

  get cards() {
    return this.cardDataService.getAllCards();
  }

}
