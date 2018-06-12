import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  private currentCOlorIndex = 0;

  @Output() onChangeColor;

  constructor(private e: ElementRef) {
    this.onChangeColor = new EventEmitter();
  }

  @HostListener('click') changeColor() { this.e.nativeElement.style.color = this.getColor(); }

  getColor() {
    const colors = ['red', 'purple', 'green', 'yellow', 'pink'];
    const selectedColor = colors[this.currentCOlorIndex++ % colors.length];
    this.onChangeColor.emit(selectedColor);
    return selectedColor;
  }

}
