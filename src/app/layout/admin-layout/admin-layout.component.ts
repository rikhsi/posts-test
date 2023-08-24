import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent {

  constructor(private authService: AuthService) {}

  logOut(): void {
    this.authService.removeToken();
  }
}
