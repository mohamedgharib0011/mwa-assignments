import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FarmersMarketModule, ROUTES } from './farmers-market/farmers-market.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FarmersMarketModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: 'fmarkets', children:ROUTES},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
