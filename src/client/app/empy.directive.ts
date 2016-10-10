//https://github.com/k3nsei/angular2-in-viewport/blob/master/in-viewport.directive.ts
//With edits from me
//Padding item MUST HAVE infiniteScrollPadding in it's id
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
/**
 * @summary
 * @module
 * @since 10/10/16
 * @copyright Copyright (c) 2016 NETSCOUT
 */
