import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['admin'])
  }
}
