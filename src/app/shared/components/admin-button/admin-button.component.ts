import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.scss']
})
export class AdminButtonComponent {
  @Input() type!: string;
  @Output() clicked = new EventEmitter();
}
