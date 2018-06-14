import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsComponent } from './farms.component';
import { FarmDetailsComponent } from './farm-details.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';
import { CanActivateGuard } from './can-activate.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'error', component: ErrorComponent },
      {
        path: '', component: FarmsComponent, children: [
          { path: 'farm/:id', component: FarmDetailsComponent, canActivate: [CanActivateGuard] }
        ]
      }

    ])
  ],
  declarations: [FarmsComponent, FarmDetailsComponent, ErrorComponent]
})
export class FarmersMarketModule { }
