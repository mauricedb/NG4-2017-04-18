import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appBla]'
})
export class BlaDirective implements OnInit, OnDestroy {

  constructor(private el: ElementRef) { }

  @Input() appBla;

  ngOnInit() {
    console.log(this.appBla)
    console.log(this.el.nativeElement)
  }

  ngOnDestroy(){
    
  }
}
