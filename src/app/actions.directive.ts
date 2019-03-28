import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appActions]'
})
export class ActionsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
