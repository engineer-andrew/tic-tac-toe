import { Directive, Input, NgModule, Component } from '@angular/core';

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

@Component({selector: 'router-outlet', template: ''})
export class RouterOutletStubComponent { }

@NgModule({
  declarations: [
    RouterLinkStubDirective,
    RouterOutletStubComponent
  ]
})
export class TestingModule { }
