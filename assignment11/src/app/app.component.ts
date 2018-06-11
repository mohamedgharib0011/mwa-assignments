import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentCounterValue;
  constructor() {
    this.componentCounterValue = 2;
  }

  getCounterChanges($event) {
    this.componentCounterValue = $event;

  }
}
