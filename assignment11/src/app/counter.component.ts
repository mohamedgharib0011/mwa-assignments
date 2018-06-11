import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <button type="button" (click)="decreaseCounter()">-</button>
    <span>{{counterValue}}</span>
    <button type="button" (click)="increaseCounter()" >+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Input('counter') counterValue = 5;
  @Output('counterChange') counterChange = new EventEmitter();
  constructor() { }

  increaseCounter(){
    this.counterValue++;
    this.counterChange.emit(""+this.counterValue);
  }
  decreaseCounter(){
    this.counterValue--;
    this.counterChange.emit(""+this.counterValue);
  }

  ngOnInit() {
  }

}
