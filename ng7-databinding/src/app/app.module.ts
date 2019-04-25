import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameCtrlComponent } from './game-ctrl/game-ctrl.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenComponent,
    OddComponent,
    GameCtrlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
