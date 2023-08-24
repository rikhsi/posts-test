import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';
import { Login, Signin } from 'src/app/models/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
    this.createStorage();
  }

  private createStorage(): void {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }

  newUser(form: Signin): Observable<boolean> {
    const list = localStorage.getItem('users');
    
    if (list) {
      const transformed: Signin[] = JSON.parse(list);
      transformed.push(form);
      localStorage.setItem('users', JSON.stringify(transformed));
      return of(true).pipe(delay(2000))
    }
    
    return of(false);
  }

  checkUser(form: Login): Observable<boolean> {
    const list = localStorage.getItem('users');

    if (list && form) {
      const transformed: Signin[] = JSON.parse(list);

      const usernameMatch = transformed.some((v) => v.username === form.username);
      const passwordMatch = transformed.some((v) => v.password === form.password);

      if (usernameMatch && passwordMatch) {
        return of(true).pipe(
          delay(3000),
          tap(() => localStorage.setItem('token', '123dfgdsg123'))
        );
      }
    }
    return of(false).pipe(delay(3000));
  }
  
  checkToken(): boolean {
    if(localStorage.getItem('token')) {
      return true
    }
    return false;
  }

  removeToken(): void {
    localStorage.removeItem('token');
    this.router.navigate(['auth'])
  }
}
