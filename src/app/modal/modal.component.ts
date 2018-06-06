import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Card } from '../card';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('childModal') public childModal:ModalDirective;
  
  @Input() title:string;

  @Input() card: Card;

  @Output()
  save: EventEmitter<Card> = new EventEmitter();

  constructor() { console.log(this); }

  ngOnInit() {
  }

  show(){
    this.childModal.show();
  }
  hide(){
    this.childModal.hide();
  }
  saveCard() {
  	console.log(this);
  	this.childModal.hide();
  	this.save.emit(this.card);
  }

}
