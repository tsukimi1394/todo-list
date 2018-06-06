import { Component, OnInit, Input } from '@angular/core';
import { ErrorMessage } from '../error-message';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

	@Input()
  errorMessage: ErrorMessage;

  constructor() { }

  ngOnInit() {
  }

}
