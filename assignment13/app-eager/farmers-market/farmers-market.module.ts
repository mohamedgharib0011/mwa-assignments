import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsComponent } from './farms.component';
import { FarmDetailsComponent } from './farm-details.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';
import { CanActivateGuard } from './can-activate.guard';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [FarmsComponent, FarmDetailsComponent, ErrorComponent]
})
export class FarmersMarketModule { }

export const ROUTES=[
  { path: 'error', component: ErrorComponent },
  {
    path: '', component: FarmsComponent, children: [
      { path: 'farm/:id', component: FarmDetailsComponent, canActivate: [CanActivateGuard] }
    ]
  }

];
