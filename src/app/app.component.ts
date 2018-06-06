import { Component } from '@angular/core';
import { Card } from './card';
import { ErrorMessage } from './error-message';
import { CardDataService } from './card-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardDataService]
})
export class AppComponent {

  okay: boolean = true;
  errorMessage: ErrorMessage = {msg:''};
  //amount: number;

  constructor(private cardDataService: CardDataService) {
  }

  onAddCard(card: Card) {
    if (this.cardDataService.checkCard(card, this.okay).okay === false) {
      this.okay = false;
      this.errorMessage.msg = this.cardDataService.checkCard(card, this.okay).errMsg.msg;
      //console.log("okay from appComponent: " + this.okay);
      //console.log("error from appComponent: ");
      //console.log(this.errorMessage);
    } else {
      this.okay = true;
      this.errorMessage.msg = this.cardDataService.checkCard(card, this.okay).errMsg.msg;
      //console.log("okay from appComponent: " + this.okay);
      //console.log("error from appComponent: ");
      //console.log(this.errorMessage);
      this.cardDataService.addCard(card);
    }
  }

  /*onCheckCard(card: Card) {
    return this.cardDataService.checkCard(card, this.okay);
  }*/

  /*onToggleCardComplete(card: Card) {
    this.cardDataService.toggleCardComplete(card);
  }*/

  onRemoveCard(card: Card) {
    this.cardDataService.deleteCardById(card.id);
    //this.amount = this.cardDataService.getAllCards().length;
  }

  get cards() {
    console.log(this.cardDataService.getAllCards());
    //this.amount = this.cardDataService.getAllCards().length;
    return this.cardDataService.getAllCards();
  }

  get amount() {
    return this.cardDataService.getAllCards().length;
  }

}
