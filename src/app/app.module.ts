import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { TrainingModule } from './training-module/training.module';
import { HomeModule } from './home-module/home.module'

import { AppRoutingModule } from './app-routing.module';

import { TrainingsService } from './trainings.service'

import 'hammerjs'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    TrainingModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [ TrainingsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
