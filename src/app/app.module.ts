import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCountdownComponent } from './my-countdown/my-countdown.component';
import { FooterSocialNetworkComponent } from './footer-social-network/footer-social-network.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCountdownComponent,
    FooterSocialNetworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
