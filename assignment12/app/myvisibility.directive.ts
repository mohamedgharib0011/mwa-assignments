import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @Input() appMyvisibility;

  constructor(private e:ElementRef,private r:Renderer) { 
    
  }

  ngOnInit(){
    console.log(this.appMyvisibility);
    
    if(this.appMyvisibility===false){
     this. r.setElementStyle(this.e.nativeElement, 'display', 'none');
    }
  }



}
