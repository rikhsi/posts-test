import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  @Output() clicked = new EventEmitter();

  constructor(private el: ElementRef) { }

  @HostListener('click')
  onClick() {
    of(1)
    .pipe(
      tap( _ => this.el.nativeElement.classList.add('active')),
      delay(300)
    )
    .subscribe({
      next: _ => {
        this.el.nativeElement.classList.remove('active');
        this.clicked.emit();
      }
      
    })
  }
}
