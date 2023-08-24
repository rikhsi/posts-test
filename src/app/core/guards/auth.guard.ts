import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';
import { inject } from '@angular/core';


export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if(!authService.checkToken()) {
    router.navigate(['auth'])
    return false
  }  
  return true;
};
