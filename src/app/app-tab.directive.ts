import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-tab]',
})
export class AppTabDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
