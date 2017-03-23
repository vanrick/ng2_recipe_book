import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened(){ //were binding to the css class open a bootstrap css class.
    return this.isOpen; //opens if this returns true. it is false to begin with.
  }
  @HostListener('mouseenter') open(){
    this.isOpen = true
  }
  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }
  private isOpen = false;

}
