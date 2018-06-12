import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-items [items]="items"></app-items>
  `
})
export class AppComponent {
  items;
  constructor() {
    this.items = ["Item","Item","Item"];
  }


}
