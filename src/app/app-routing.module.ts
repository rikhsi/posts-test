import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { BasicPages } from './models/components/pages';

const routes: Routes = [
  {
    path: BasicPages.auth,
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: BasicPages.admin,
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: BasicPages.auth
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
