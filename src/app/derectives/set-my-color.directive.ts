import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSetMyColor]'
})
export class SetMyColorDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'red';
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = 'orange';
  }
 
  
}
