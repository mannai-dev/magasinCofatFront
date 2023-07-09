import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Twhinh200120Component } from './twhinh200120/twhinh200120.component';
import { Twhinh204120Component } from './twhinh204120/twhinh204120.component';
import { Twhinh220120Component } from './twhinh220120/twhinh220120.component';
import { LnRoutingModule } from './ln-routing.module';
import { Twhinh120PopupComponent } from './twhinh120-popup/twhinh120-popup.component';
import { Twhinh204PopupComponent } from './twhinh204-popup/twhinh204-popup.component';
import { Twhinh220PopupComponent } from './twhinh220-popup/twhinh220-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Twhinh200DetailsComponent } from './twhinh200-details/twhinh200-details.component';
import { Twhinh204DetailsComponent } from './twhinh204-details/twhinh204-details.component';
import { Twhinh220DetailsComponent } from './twhinh220-details/twhinh220-details.component';


@NgModule({
  declarations: [
    Twhinh200120Component,
    Twhinh204120Component,
    Twhinh220120Component,
    Twhinh120PopupComponent,
    Twhinh204PopupComponent,
    Twhinh220PopupComponent,
    Twhinh200DetailsComponent,
    Twhinh204DetailsComponent,
    Twhinh220DetailsComponent,
  ],
  imports: [
    CommonModule,
    LnRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ]
})
export class LnModule { }
