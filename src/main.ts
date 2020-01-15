import './polyfills';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Route } from '@angular/router';
import { DemoMaterialModule } from './material-module';

import { AppComponent } from './app/app.component';
import { TabNavBarBasicExample } from './app/tab-nav-bar-basic-example';
import { FirstComponent } from './app/first.component';
import { SecondComponent } from './app/second.component';
import { ThirdComponent } from './app/third.component';

const routes: Route[] = [
  {
    path: 'main', component: TabNavBarBasicExample, children: [
      { path: 'first', component: FirstComponent, data: { state: 1} },
      { path: 'second', component: SecondComponent, data: { state: 2} },
      { path: 'third', component: ThirdComponent, data: { state: 3} },
      { path: '', redirectTo: 'first', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
]

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, TabNavBarBasicExample, FirstComponent, SecondComponent, ThirdComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */