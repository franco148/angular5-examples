import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxmapComponent } from './components/boxmap/boxmap.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxmapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
