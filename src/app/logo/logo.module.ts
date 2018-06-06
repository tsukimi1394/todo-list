import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCompComponent } from './logo-comp/logo-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoCompComponent],
  exports: [
  	LogoCompComponent
  ]
})
export class LogoModule { }
