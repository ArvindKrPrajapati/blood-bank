import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BloodComponent } from './components/blood/blood.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { BloodService } from './service/blood.service';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { BloodFormComponent } from './components/blood-form/blood-form.component';
@NgModule({
  declarations: [
    AppComponent,
    BloodComponent,
    BloodFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    DragDropModule
  ],
  providers: [BloodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
