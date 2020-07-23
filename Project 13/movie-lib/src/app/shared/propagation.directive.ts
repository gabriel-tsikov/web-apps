import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPropagation]'
})
export class PropagationDirective {
  @HostListener("click", ["$event"])
  public onClick(event: any) : void {
    event.stopPropagation();
    
  }

}
