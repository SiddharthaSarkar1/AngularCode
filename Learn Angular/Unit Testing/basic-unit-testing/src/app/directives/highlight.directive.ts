import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  defaultColor = 'rgb(211, 211, 211)'; // lightgray

  @Input('highlight') bgColor = '';

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor =
      this.bgColor || this.defaultColor;
  }
}
