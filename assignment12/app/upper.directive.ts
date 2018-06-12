import { Directive, ElementRef, Renderer2, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private e: ElementRef, private r: Renderer2) {
  }

  ngOnInit() {
    const txt=this.e.nativeElement.innerText;
    this.e.nativeElement.innerText=txt.toUpperCase();
  }

}
