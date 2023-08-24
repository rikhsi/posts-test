import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolver } from 'src/app/core/resolvers/post.resolver';
import { AdminPages } from 'src/app/models/components/pages';

const routes: Routes = [
  {
    path: AdminPages.list,
    loadChildren: () => import('./page/list-page/list-page.module').then((m) => m.ListPageModule)
  },
  {
    path: AdminPages.post,
    resolve: {
      postResolver: PostResolver
    },
    loadChildren: () => import('./page/post-page/post-page.module').then((m) => m.PostPageModule)
  },
  {
    path: '**',
    redirectTo: AdminPages.list
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
