import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CodeHighlighterModule } from 'primeng/codehighlighter';

import { AppComponent } from './app.component';
import { AngularPhoneticModule } from 'angular-phonetic';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularPhoneticModule,
    CodeHighlighterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
