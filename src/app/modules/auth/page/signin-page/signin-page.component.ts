import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Signin } from 'src/app/models/api/auth';
import { SigninForm } from 'src/app/models/components/auth_form';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninPageComponent implements OnInit, OnDestroy  {
  createForm!: FormGroup<SigninForm>;
  isLoading: boolean = false;
  sub$!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }

  private initForm() {
    this.createForm = new FormGroup<SigninForm>({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

  private createFinalForm(): Signin {
    const form: Signin = {
      name: this.createForm.controls['name'].value,
      username: this.createForm.controls['username'].value,
      email: this.createForm.controls['email'].value,
      password: this.createForm.controls['password'].value
    }
    return form;
  }

  submit(): void {
    if(this.createForm.valid) {
      this.isLoading = true;
      this.sub$ = this.authService.newUser(this.createFinalForm())
        .subscribe({
          next: _ => {
            this.isLoading = false;
            this.navigate();
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
    this.router.navigate(['auth/login'])
  }
}
