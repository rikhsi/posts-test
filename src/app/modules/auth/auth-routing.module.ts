import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPages } from 'src/app/models/components/pages';

const routes: Routes = [
  {
    path: AuthPages.register,
    loadChildren: () => import('./page/signin-page/signin-page.module').then((m) => m.SigninPageModule)
  },
  {
    path: AuthPages.login,
    loadChildren: () => import('./page/login-page/login-page.module').then((m) => m.LoginPageModule)
  },
  {
    path: '**',
    redirectTo: AuthPages.login
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
