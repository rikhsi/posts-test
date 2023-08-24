import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthInputComponent),
      multi: true,
    },
  ],
})
export class AuthInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() type!: string;
  @Input() error!: boolean;
  value: string = '';

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(): void {
    this.onChange(this.value);
    this.onTouched();
  }

}
