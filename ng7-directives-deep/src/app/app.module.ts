import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlightComponent } from './basic-highlight/basic-highlight.component';
import { BetterHighlightComponent } from './better-highlight/better-highlight.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightComponent,
    BetterHighlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
