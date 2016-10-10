import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {

  listA: Array<any> = [];

  limit: number = 50;

  constructor() {
    console.log('Environment config', Config);
    setTimeout(this.exampleFunc.bind(this), 1000);
  }

  exampleFunc() {
    if (this.listA.length > this.limit) {
      this.listA = [];
    } else {
      this.listA.push(this.listA.length)
    }
    setTimeout(this.exampleFunc.bind(this), 1000);
  }

}
