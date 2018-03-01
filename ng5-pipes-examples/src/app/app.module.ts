import { BrowserModule } from '@angular/platform-browser';
// Adding LOCALE_ID for changing date values to spanish
import { LOCALE_ID, NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Next lines for chaning to spanish format the dates
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

// Local resources
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { SecuredomPipe } from './pipes/securedom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    SecuredomPipe
  ],
  imports: [
    BrowserModule
  ],
  //add required information to provides for locales
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
