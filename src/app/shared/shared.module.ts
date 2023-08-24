import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostTableComponent } from './components/post-table/post-table.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { AuthInputComponent } from './components/auth-input/auth-input.component';
import { FormsModule } from '@angular/forms';
import { AdminButtonComponent } from './components/admin-button/admin-button.component';
import { ButtonDirective } from './directives/button.directive';

@NgModule({
  declarations: [
    PostTableComponent,
    AuthButtonComponent,
    AuthInputComponent,
    AdminButtonComponent,
    ButtonDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PostTableComponent,
    AuthButtonComponent,
    AuthInputComponent,
    AdminButtonComponent
  ]
})
export class SharedModule { }
