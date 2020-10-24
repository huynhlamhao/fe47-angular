import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlightDirectives]',
})
export class HightlightDirectivesDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }
}
