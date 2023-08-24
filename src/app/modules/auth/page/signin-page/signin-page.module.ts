import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninPageRoutingModule } from './signin-page-routing.module';
import { SigninPageComponent } from './signin-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninPageComponent
  ],
  imports: [
    CommonModule,
    SigninPageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SigninPageModule { }
