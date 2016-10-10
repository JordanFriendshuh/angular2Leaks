import { Directive, OnInit, OnDestroy, ElementRef, Output, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: '[empty]'
})

export class empty implements OnInit, OnDestroy {

  constructor(private _el: ElementRef) {
  }


  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
