import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-farms',
  template: `
    <ul>
      <li *ngFor="let farm of farms" > <a [routerLink]="['farm',farm._id]">{{farm.farm}}</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class FarmsComponent implements OnInit {
  farms: Object[];
  constructor(private db: DbService) {
    this.farms = db.getDate();
  }

  ngOnInit() {
  }

}
