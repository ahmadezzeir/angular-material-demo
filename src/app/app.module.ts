import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';
import { LeftMenu1Component } from './left-menu1/left-menu1.component';
import { MasterComponent } from './master/master.component';
import { LeftMenu2Component } from './left-menu2/left-menu2.component';
import { FlightItemComponent } from './flight-item/flight-item.component';
import { MatInputModule } from '@angular/material';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  declarations: [AppComponent, DialogContentComponent, LeftMenu1Component, MasterComponent, LeftMenu2Component, FlightItemComponent],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
