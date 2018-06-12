import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  template: `
    <ul>
      <li appMycolor appUpper  (onChangeColor)="selectedColor=$event" >I am using upper directive</li>
      <li appMycolor   (onChangeColor)="selectedColor=$event" >Click to change my color, my color is: {{selectedColor}}</li>
      <li  [appMyvisibility]="true"> I am using Myvisibility Directive, set visiblity false to hide</li>
      <li  *ngFor="let item of items; let seq=index" > Input Array#{{seq}}: {{item}} </li>
    </ul>
  `,
  styles: []
})
export class ItemsComponent implements OnInit {

  selectedColor = "black";

  @Input() items;


  constructor() { }

  ngOnInit() {
  }

}
