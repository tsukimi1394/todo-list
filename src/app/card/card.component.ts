import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ViewContainerRef  } from '@angular/core';
import { Card } from '../card';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  doneCheck: boolean = false;
  doingCheck: boolean = false;
  cancelledCheck: boolean = false;
  undoneCheck: boolean = false;

  visible = false;
  visibleAnimate = false;

  @ViewChild('childModal') childModal: ModalComponent;

	@Input() card: Card;

	@Output()
	remove: EventEmitter<Card> = new EventEmitter();

  @Output()
  save: EventEmitter<Card> = new EventEmitter();

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    console.log(this.card);
    this.chooseClass(this.card);
  }

  removeCard(card: Card) {
  	this.remove.emit(card);
  }

  onSaveCard(card: Card) {
    console.log("from card");
    console.log(card);
    this.chooseClass(card);
  }

  private chooseClass(card: Card) {
    switch (card.status) {
      case "undone":
        this.undoneCheck = true;
        this.doneCheck = false;
        this.doingCheck = false;
        this.cancelledCheck = false;
        break;

      case "doing":
        this.doingCheck = true;
        this.undoneCheck = false;
        this.doneCheck = false;
        this.cancelledCheck = false;
        break;

      case "cancelled":
        this.cancelledCheck = true;
        this.undoneCheck = false;
        this.doneCheck = false;
        this.doingCheck = false;
        break;

      case "done":
        this.doneCheck = true;
        this.undoneCheck = false;
        this.doingCheck = false;
        this.cancelledCheck = false;
        break;
      
      default:
        this.undoneCheck = false;
        this.doneCheck = false;
        this.doingCheck = false;
        this.cancelledCheck = false;
        break;
    }
  }

}
