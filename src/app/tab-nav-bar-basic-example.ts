import {Component} from '@angular/core';
import { routerTransition } from './router.animations';
/**
 * @title Basic use of the tab nav bar
 */
@Component({
  selector: 'tab-nav-bar-basic-example',
  templateUrl: 'tab-nav-bar-basic-example.html',
  styleUrls: ['tab-nav-bar-basic-example.css'],
  animations: [ routerTransition ]
})
export class TabNavBarBasicExample {
  links = ['first', 'second', 'third'];
  activeLink = this.links[0];

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */