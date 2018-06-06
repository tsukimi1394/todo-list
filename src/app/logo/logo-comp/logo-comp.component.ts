import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'logo-comp',
  templateUrl: './logo-comp.component.html',
  styleUrls: ['./logo-comp.component.css']
})
export class LogoCompComponent implements OnInit {

	@Input()
  amount: number;

  constructor() { }

  ngOnInit() {
  }

}
