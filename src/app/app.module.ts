import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { ModalComponent } from './modal/modal.component';

import { LogoModule } from './logo/logo.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    ErrorMsgComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    LogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
