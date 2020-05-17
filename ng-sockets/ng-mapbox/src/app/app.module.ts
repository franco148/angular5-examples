import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

import { AppComponent } from './app.component';
import { BoxmapComponent } from './components/boxmap/boxmap.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BoxmapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocketIoModule.forRoot(environment.socketConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
