import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    SharedModule
  ]
})
export class ListPageModule { }
