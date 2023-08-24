import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of} from 'rxjs';
import { BasicPages } from 'src/app/models/components/pages';
import { PostService } from 'src/app/modules/admin/services/post.service';

export const PostResolver: ResolveFn<boolean> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<boolean> => {
  const router = inject(Router);
  const postService = inject(PostService);

  return postService.getPost(+route.params['id'])
    .pipe(
      map(() => true),
      catchError(() => {
        router.navigate([BasicPages.admin]);
        return of(false);
      })
    );
};