import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutModule } from './layout/auth-layout/auth-layout.module';
import { AdminLayoutModule } from './layout/admin-layout/admin-layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicInterceptor } from './core/interceptors/basic.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthLayoutModule,
    AdminLayoutModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: BasicInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
