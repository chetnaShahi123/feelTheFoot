import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFancy]'
})
export class FancyDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.color = '#ff000f';
   }

}
