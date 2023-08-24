import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Login } from 'src/app/models/api/auth';
import { LoginForm } from 'src/app/models/components/auth_form';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit, OnDestroy {
  createForm!: FormGroup<LoginForm>;
  isLoading: boolean = false;
  sub$!: Subscription;
  
  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }

  private initForm() {
    this.createForm = new FormGroup<LoginForm>({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  private createFinalForm(): Login {
    const form: Login = {
      username: this.createForm.controls['username'].value,
      password: this.createForm.controls['password'].value
    }
    return form;
  }

  private setAsInvalid(): void {
    this.createForm.controls['username'].setErrors({ serverError: true });
    this.createForm.controls['password'].setErrors({ serverError: true });
  }

  submit(): void {
    if(this.createForm.valid) {
      this.isLoading = true;
      this.sub$ = this.authService.checkUser(this.createFinalForm()).subscribe({
        next: v => {
          if(v) {
            this.router.navigate(['admin'])
          } 
          this.isLoading = false;
          this.setAsInvalid();
          this.cdr.markForCheck();
        }
      })
    } else {
      Object.values(this.createForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  navigate(): void {
    this.router.navigate(['auth/register'])
  }
}
